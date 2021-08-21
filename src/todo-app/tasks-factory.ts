import { USER_ID } from '../consts';
import { Task } from '../interfaces/task.interface';

export function taskFactory(title: string, lastId: number): Task {
  return {
    title: title,
    id: lastId + 1,
    userId: USER_ID,
    completed: false
  };
}
