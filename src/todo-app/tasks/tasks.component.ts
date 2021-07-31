import { Component, OnInit } from '@angular/core';
import { TasksFacade } from '../tasks-facade';
import { TaskEditableData } from '../../types/tasks.types';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  completedTasks$ = this.facade.completedTasks$;
  todoTasks$ = this.facade.todoTasks$;

  constructor(private readonly facade: TasksFacade) {}

  ngOnInit() {
    this.facade.loadTasks();
  }

  addTask(taskTitle: string) {
    this.facade.addTask(taskTitle);
  }

  editTask(task: TaskEditableData) {
    this.facade.editTask(task);
  }

  completeTask(id: number) {
    this.facade.completeTask(id);
  }

  deleteTask(taskId: number) {
    this.facade.deleteTask(taskId);
  }
}
