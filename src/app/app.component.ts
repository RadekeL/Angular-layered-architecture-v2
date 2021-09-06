import { Component, VERSION } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { map, pluck } from 'rxjs';
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
    console.log('appcomponent', stateManagerTESTING);

    // stateManagerTESTING.stateManager.selectState$
    //   .pipe(map(elements => elements.tasks))
    //   .subscribe(_ => console.log('APP', _));
    stateManagerTESTING
      .select(
        map((elements: any) => elements)
        // pluck('tasks')
      )
      .subscribe(_ => console.log('APP v2', _));

    stateManagerTESTING.action({ arrayRoyal: [1, 2, 3, 4, 5] } as any);
  
  }

  openDialog() {
    this.dialog.open(DialogComponent);
  }
}
