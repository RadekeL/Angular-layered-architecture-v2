import { USER_ID } from '../consts';
import { Task } from '../interfaces/task.interface';

//  PRZEMYŚL CZY NIE MODEL
export class TasksFactory {
  constructor(private title: string, private readonly lastId: number) {}

  create(): Task {
    return this.createTaskData(this.title, this.lastId);
  }

  private createTaskData(taskTitle: string, lastTaskId: number): Task {
    return {
      title: taskTitle,
      id: lastTaskId + 1,
      userId: USER_ID,
      completed: false
    };
  }
}
