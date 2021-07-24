import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../interfaces/task.interface';
import { TasksStateComponent } from './tasks-state.component';

@Injectable()
export class TasksStateAdapter {
  constructor(private readonly taskState: TasksStateComponent) {}

  addTask(task: Task) {
    this.taskState.addTask(task);
  }

  setTasks(tasks: Task[]) {
    this.taskState.setTasks(tasks);
  }

  completeTask(id: number) {
    this.taskState.completeTask(id);
  }

  deleteTask(taskId: number) {
    this.taskState.deleteTask(taskId);
  }

  public get selectLastIdTask(): Observable<number> {
    return this.taskState.selectLastIdTask$;
  }

  public get selectTasks$(): Observable<Task[]> {
    return this.taskState.selectTasks$;
  }

  public get selectTodoTasks$() {
    return this.taskState.selectTodoTasks$;
  }

  public get selectCompletedTasks$() {
    return this.taskState.selectCompletedTasks$;
  }

  public get selectLastIdTask$() {
    return this.taskState.selectLastIdTask$;
  }
}
