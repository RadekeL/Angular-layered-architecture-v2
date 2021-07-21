import { Injectable } from '@angular/core';
import { TasksApiService } from './tasks-api.service';
import { TasksFactory } from './tasks-factory';
import { TasksStateComponent } from './tasks-state.component';

@Injectable()
export class TasksFacade {
  completedTasks$ = this.taskState.selectCompletedTasks$;
  todoTasks$ = this.taskState.selectTodoTasks$;

  constructor(
    private readonly taskService: TasksApiService,
    private readonly taskState: TasksStateComponent
  ) {}

  addTask(title: string) {
    this.taskState.selectLastIdTask$.subscribe((lastId: number) => {
      const task = new TasksFactory(title, lastId).create();
      this.taskState.addTask(task);
    });
  }

  editTask() {}

  loadTasks() {
    this.taskService.getTasks().subscribe(tasks => {
      this.taskState.setTasks(tasks);
    });
  }

  completeTask(id: number) {
    this.taskState.completeTask(id);
  }

  deleteTask(taskId: number) {
    this.taskState.deleteTask(taskId);
  }
}
