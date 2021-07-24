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
  @Output() onEdit = new EventEmitter<string>();
  @Output() onComplete = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  deleteTask(task: Task) {
    this.onDelete.emit(task.id);
  }

  completeTask(task: Task) {
    this.onComplete.emit(task.id)
  }

}