import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, pluck } from 'rxjs';
import { Observable } from 'rxjs';
import { first, map } from 'rxjs/operators';
import { USER_ID } from '../consts';
import { Task } from '../interfaces/task.interface';

type TasksState = {
  tasks: Task[];
};

@Injectable()
export class TasksStateComponent implements OnInit {
  private initState: TasksState = {
    tasks: []
  };

  private _state$ = new BehaviorSubject<TasksState>(this.initState);

  private _stateAsObservable$ = this._state$.asObservable();

  constructor() {}

  ngOnInit() {}

  // * Actions
  public setTasks(tasks: Task[]) {
    this._state$.next({ ...this._state$.value, tasks });
  }

  public deleteTask(taskId: number) {
    const { tasks } = this._state$.getValue();
    const tasksWithoutDeletedElement: Task[] = tasks.filter(
      task => task.id !== taskId
    );
    this.setTasks(tasksWithoutDeletedElement);
  }

  public addTask(task: Task) {
    const { tasks } = this._state$.getValue();
    this.setTasks([...tasks, task]);
  }

  public completeTask(taskId: number) {
    const { tasks } = this._state$.getValue();
    const index = tasks.findIndex(task => task.id === taskId);

    tasks[index] = { ...tasks[index], completed: true };
    this.setTasks(tasks);
  }

  // ** Selectors
  public get selectTasks$(): Observable<Task[]> {
    return this._stateAsObservable$.pipe(
      pluck('tasks'),
      map((tasks: Task[]) => tasks.filter(task => task.userId === USER_ID))
    );
  }

  public get selectTodoTasks$() {
    return this.selectTasks$.pipe(
      map((tasks: Task[]) => tasks.filter(task => !task.completed))
    );
  }

  public get selectCompletedTasks$() {
    return this.selectTasks$.pipe(
      map((tasks: Task[]) => tasks.filter(task => !!task.completed))
    );
  }

  public get selectLastIdTask$() {
    return this.selectTasks$.pipe(
      first(),
      map((tasks: Task[]) => {
        const last = tasks.length - 1;
        return tasks[last].id;
      })
    );
  }
}
