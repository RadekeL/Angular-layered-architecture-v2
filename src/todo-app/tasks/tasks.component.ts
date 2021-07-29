import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TasksFacade } from '../tasks-facade';
import { Task } from '../../interfaces/task.interface';

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

  addTask(task: string) {
    this.facade.addTask(task);
  }

  editTask(id: number) {
    this.facade.editTask(id);
  }

  loadTasks() {}

  completeTask(id: number) {
    this.facade.completeTask(id);
  }

  todoTask() {}

  deleteTask(taskId: number) {
    this.facade.deleteTask(taskId);
  }
}
