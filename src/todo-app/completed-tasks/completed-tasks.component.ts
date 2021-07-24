import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../../interfaces/task.interface';

@Component({
  selector: 'app-completed-tasks',
  templateUrl: './completed-tasks.component.html',
  styleUrls: ['./completed-tasks.component.css']
})
export class CompletedTasksComponent implements OnInit {
  @Output() onDelete = new EventEmitter<number>();
  @Output() onEdit = new EventEmitter<string>();
  @Input() tasks$: Observable<Task[]>;
  constructor() {}

  ngOnInit() {}

  deleteTask(id: number) {
    this.onDelete.emit(id);
  }
  editTask() {}
}
