import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../../interfaces/task.interface';
import { TaskEditableData } from '../../types/tasks.types';

@Component({
  selector: 'app-todo-tasks',
  templateUrl: './todo-tasks.component.html',
  styleUrls: ['./todo-tasks.component.css']
})
export class TodoTasksComponent implements OnInit {
  @Output() onDelete = new EventEmitter<number>();
  @Output() onEdit = new EventEmitter<TaskEditableData>();
  @Output() onComplete = new EventEmitter<number>();

  @Input() tasks$: Observable<Task[]>;

  constructor() {}

  ngOnInit() {}

  deleteTask(id: number) {
    this.onDelete.emit(id);
  }

  editTask(task: TaskEditableData) {
    this.onEdit.emit(task);
  }

  completeTask(id: number) {
    this.onComplete.emit(id);
  }
}
