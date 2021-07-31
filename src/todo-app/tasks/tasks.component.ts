import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TasksFacade } from '../tasks-facade';
import { Task } from '../../interfaces/task.interface';
import { tap } from 'rxjs';
import { TaskEditableData } from '../../types/tasks.types';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  completedTasks$ = this.facade.completedTasks$;
  todoTasks$ = this.facade.todoTasks$;
  editedTaskId$ = this.facade.editedTask$;

  constructor(private readonly facade: TasksFacade) {}

  ngOnInit() {
    this.facade.loadTasks();
  }

  addTask(task: string) {
    this.facade.addTask(task);
  }

  editTask(task: TaskEditableData) {
    this.facade.editTask(task);
  }

  disableTask() {
    this.facade.disableTask();
  }

  completeTask(id: number) {
    this.facade.completeTask(id);
  }

  deleteTask(taskId: number) {
    this.facade.deleteTask(taskId);
  }
}
