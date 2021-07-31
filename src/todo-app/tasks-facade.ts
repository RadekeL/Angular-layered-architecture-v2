import { Injectable } from '@angular/core';
import { Task } from '../interfaces/task.interface';
import { TaskEditableData } from '../types/tasks.types';
import { TasksApiService } from './tasks-api.service';
import { TasksFactory } from './tasks-factory';
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
      const task = new TasksFactory(title, lastId).create();
      this.stateAdapter.addTask(task);
    });
  }

  editTask(task: TaskEditableData) {
    this.stateAdapter.editTask(task);
  }

  loadTasks() {
    this.taskService.getTasks().subscribe(tasks => {
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
