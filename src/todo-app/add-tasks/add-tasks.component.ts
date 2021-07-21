import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-tasks',
  templateUrl: './add-tasks.component.html',
  styleUrls: ['./add-tasks.component.css']
})
export class AddTasksComponent implements OnInit {
  @Output() onTaskAdded = new EventEmitter<string>();
  constructor() {}

  ngOnInit() {}

  onSubmit(form: NgForm) {
    this.onTaskAdded.emit(form.value.title);
    form.reset();
  }
}
