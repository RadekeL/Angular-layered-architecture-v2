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
import { map } from 'rxjs';
import { filter } from 'rxjs';
import { DialogComponent } from '../../dialog/dialog.component';
import { Task } from '../../interfaces/task.interface';
import { TaskEditableData } from '../../types/tasks.types';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  @Output() onDelete = new EventEmitter<number>();
  @Output() onEdit = new EventEmitter<TaskEditableData>();
  @Output() onComplete = new EventEmitter<number>();
  @Input() task: Task;

  constructor(public dialog: MatDialog) {}

  ngOnInit() {}

  deleteTask() {
    this.onDelete.emit(this.task.id);
  }

  completeTask() {
    this.onComplete.emit(this.task.id);
  }

  editTask() {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '350px',
      data: this.task
    });

    dialogRef
      .afterClosed()
      .pipe(filter(title => title))
      .subscribe((editedTitle: string) => {
        this.onEdit.emit({ id: this.task.id, title: editedTitle });
      });
  }
}
