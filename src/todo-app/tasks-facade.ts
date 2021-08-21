import { Injectable } from '@angular/core';
import { filter, map } from 'rxjs/operators';
import { USER_ID } from '../consts';
import { Task } from '../interfaces/task.interface';
import { TaskEditableData } from '../types/tasks.types';
import { TasksApiService } from './tasks-api.service';
import { taskFactory } from './tasks-factory';
import { TasksStateAdapter } from './tasks-state.adapter';

@Injectable()
export class TasksFacade {
  completedTasks$ = this.stateAdapter.selectCompletedTasks$;
  todoTasks$ = this.stateAdapter.selectTodoTasks$;

  constructor(
    private readonly taskService: TasksApiService,
    private readonly stateAdapter: TasksStateAdapter
  ) {}

  addTask(title: string) {
    this.stateAdapter.selectLastIdTask$.subscribe((lastId: number) => {
      console.log(lastId);
      const task = taskFactory(title, lastId);
      this.stateAdapter.addTask(task);
    });
  }

  editTask(task: TaskEditableData) {
    this.stateAdapter.editTask(task);
  }

  loadTasks() {
    this.taskService
      .getTasks()
      .pipe(
        map((tasks: Task[]) => tasks.filter(task => task.userId === USER_ID))
      )
      .subscribe(tasks => {
        this.stateAdapter.setTasks(tasks);
      });
  }

  completeTask(id: number) {
    this.stateAdapter.completeTask(id);
  }

  deleteTask(taskId: number) {
    this.stateAdapter.deleteTask(taskId);
  }
}
