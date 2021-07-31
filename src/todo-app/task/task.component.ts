import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../../dialog/dialog.component';
import { Task } from '../../interfaces/task.interface';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  @Output() onDelete = new EventEmitter<number>();
  @Output() onEdit = new EventEmitter<string>();
  @Output() onComplete = new EventEmitter<number>();
  @Input() task: Task;

  @ViewChild('taskField') taskRef: ElementRef<HTMLInputElement>;

  public disabled = true;

  constructor(public dialog: MatDialog) {}

  ngOnInit() {}

  deleteTask() {
    this.onDelete.emit(this.task.id);
  }

  completeTask() {
    this.onComplete.emit(this.task.id);
  }

  lockTask(event) {
    console.log(event.target.value);

    this.onEdit.emit('');
    this.disabled = true;
  }

  editTask() {
    this.dialog.open(DialogComponent);

    // this.disabled = false;
    // setTimeout(() => {
    //   this.taskRef.nativeElement.focus();
    // });
  }
}
