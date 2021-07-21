import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs/operators';
import { USER_ID } from '../consts';
import { Task } from '../interfaces/task.interface';
import { TasksApiService } from './tasks-api.service';
import { TasksStateComponent } from './tasks-state.component';

@Injectable()
export class TasksFacade {
  completedTasks$ = this.taskState.completedTasks$;
  todoTasks$ = this.taskState.todoTasks$;

  constructor(
    private readonly taskService: TasksApiService,
    private readonly taskState: TasksStateComponent
  ) {}

  addTask(taskTitle: string) {
    // console.log(taskTitle);
    this.taskDataGenerator(taskTitle);
  }
  // TODO make factory
  private taskDataGenerator(taskTitle: string) {
    this.taskState.lastIdTask$
      .pipe(
        map((lastTaskId: number) => ({
          userId: USER_ID,
          id: lastTaskId + 1,
          title: taskTitle,
          completed: false
        }))
      )
      .subscribe((task: Task) => this.taskState.addTask(task));
  }

  editTask() {}

  loadTasks() {
    this.taskService.getTasks().subscribe(tasks => {
      this.taskState.setTasks(tasks);
    });
  }

  completeTask(id: number) {
    console.log(id)
    this.taskState.completeTask(id)
  }

  todoTask() {}

  deleteTask(taskId: number) {
    this.taskState.deleteTask(taskId);
  }
}
