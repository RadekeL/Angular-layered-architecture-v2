import { Component, VERSION } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { StateManagerTESTING } from '../todo-app/state-manager-testing';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  constructor(
    public dialog: MatDialog,
    private readonly stateManagerTESTING: StateManagerTESTING
  ) {
    console.log(stateManagerTESTING)
  }

  openDialog() {
    this.dialog.open(DialogComponent);
  }
}
