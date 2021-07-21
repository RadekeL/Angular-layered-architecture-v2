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

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule],
  declarations: [
    AppComponent,
    HelloComponent,
    AddTasksComponent,
    CompletedTasksComponent,
    TodoTasksComponent,
    TasksListComponent,
    TasksComponent
  ],
  providers: [TasksStateComponent, TasksApiService, TasksFacade],
  bootstrap: [AppComponent]
})
export class AppModule {}
