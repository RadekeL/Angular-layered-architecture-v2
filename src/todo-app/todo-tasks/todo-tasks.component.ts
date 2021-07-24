import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../../interfaces/task.interface';

@Component({
  selector: 'app-todo-tasks',
  templateUrl: './todo-tasks.component.html',
  styleUrls: ['./todo-tasks.component.css']
})
export class TodoTasksComponent implements OnInit {
  @Output() onDelete = new EventEmitter<number>();
  @Output() onEdit = new EventEmitter<string>();
  @Output() onComplete = new EventEmitter<number>();
  @Input() tasks$: Observable<Task[]>;
  constructor() {}

  ngOnInit() {}

  deleteTask(id: number) {
    this.onDelete.emit(id);
  }

  editTask() {}

  completeTask(id: number) {
    this.onComplete.emit(id);
  }
}
