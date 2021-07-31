import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild
} from '@angular/core';
import { Task } from '../../interfaces/task.interface';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  @Output() onDelete = new EventEmitter<number>();
  @Output() onEdit = new EventEmitter<number>();
  @Output() onComplete = new EventEmitter<number>();
  @Input() task: Task;

  @ViewChild('taskField') taskRef: ElementRef<HTMLInputElement>;

  public disabled = true;

  constructor() {}

  ngOnInit() {}

  deleteTask() {
    this.onDelete.emit(this.task.id);
  }

  completeTask() {
    this.onComplete.emit(this.task.id);
  }

  editTask() {
    this.disabled = false;
  }
}
