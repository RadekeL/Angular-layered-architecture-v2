import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AddTasksComponent } from '../todo-app/add-tasks/add-tasks.component';
import { CompletedTasksComponent } from '../todo-app/completed-tasks/completed-tasks.component';
import { TodoTasksComponent } from '../todo-app/todo-tasks/todo-tasks.component';
import { TasksApiService } from '../todo-app/tasks-api.service';
import { TasksListComponent } from '../todo-app/tasks-list/tasks-list.component';
import { TasksStateComponent } from '../todo-app/tasks-state.component';
import { TasksComponent } from '../todo-app/tasks/tasks.component';
import { TasksFacade } from '../todo-app/tasks-facade';
import { HttpClientModule } from '@angular/common/http';
import { TaskComponent } from '../todo-app/task/task.component';
import { TasksStateAdapter } from '../todo-app/tasks-state.adapter';
import { MatMenuModule } from '@angular/material/menu';
import { PortalModule } from '@angular/cdk/portal';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MaterialModule } from '../material-module/material-module';
import { DialogComponent } from '../dialog/dialog.component';
import { MatNativeDateModule } from '@angular/material/core';
import { StateManager } from '../utils/state-manager/state-manager';
import { StateManagerTESTING } from '../todo-app/state-manager-testing';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatMenuModule,
    PortalModule,
    BrowserAnimationsModule,
    MatNativeDateModule,
    MatAutocompleteModule,
    MaterialModule
  ],
  declarations: [
    DialogComponent,
    AppComponent,
    HelloComponent,
    AddTasksComponent,
    CompletedTasksComponent,
    TodoTasksComponent,
    TasksListComponent,
    TasksComponent,
    TaskComponent
  ],
  entryComponents: [DialogComponent, AppComponent],
  providers: [
    TasksStateComponent,
    TasksApiService,
    TasksFacade,
    TasksStateAdapter,
    // ! Testing
    StateManagerTESTING
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
