import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../interfaces/task.interface';
import { TaskEditableData } from '../types/tasks.types';
import { TasksStateComponent } from './tasks-state.component';

@Injectable()
export class TasksStateAdapter {
  constructor(private readonly taskState: TasksStateComponent) {}
  addTask = this.taskState.addTask.bind(this.taskState);
  setTasks = this.taskState.setTasks.bind(this.taskState);
  completeTask = this.taskState.completeTask.bind(this.taskState);
  deleteTask = this.taskState.deleteTask.bind(this.taskState);
  editTask = this.taskState.editTask.bind(this.taskState);
  public selectLastIdTask = this.taskState.selectLastIdTask$;
  public selectTasks$ = this.taskState.selectTasks$;
  public selectTodoTasks$ = this.taskState.selectTodoTasks$;
  public selectCompletedTasks$ = this.taskState.selectCompletedTasks$;
  public selectLastIdTask$ = this.taskState.selectLastIdTask$;
}
