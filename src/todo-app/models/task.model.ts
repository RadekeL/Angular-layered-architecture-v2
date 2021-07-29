export class TaskModel {
  _isEditable = false;

  constructor(public task: Task) {}

  markAsEditable() {
    this._isEditable = true;
  }

  markAsDisable() {
    this._isEditable = true;
  }

  get userId() {
    return this.task.userId;
  }
  get id() {
    return this.task.id;
  }
  get title() {
    return this.task.title;
  }
  get completed() {
    return this.task.completed;
  }

  get isEditable() {
    return this._isEditable;
  }
}
export interface Task {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}
