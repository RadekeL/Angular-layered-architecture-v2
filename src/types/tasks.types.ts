import { Task } from '../interfaces/task.interface';

export type TaskEditableData = Pick<Task, 'id' | 'title'>