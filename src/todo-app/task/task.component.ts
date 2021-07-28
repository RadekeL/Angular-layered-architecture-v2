import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from '../../interfaces/task.interface';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  @Input() task: Task;
  @Output() onDelete = new EventEmitter<number>();
  @Output() onEdit = new EventEmitter<number>();
  @Output() onComplete = new EventEmitter<number>();

  constructor() {}

  ngOnInit() {}

  deleteTask() {
    this.onDelete.emit(this.task.id);
  }

  completeTask() {
    this.onComplete.emit(this.task.id);
  }

  editTask() {
    this.onEdit.emit(this.task.id)
  }
}
