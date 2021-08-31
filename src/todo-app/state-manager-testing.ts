import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, pluck } from 'rxjs';
import { Observable } from 'rxjs';
import { first, map, mergeMap, tap, toArray } from 'rxjs/operators';
import { USER_ID } from '../consts';
import { Task } from '../interfaces/task.interface';
import { TaskEditableData } from '../types/tasks.types';
import { StateManager } from '../utils/state-manager/state-manager';
import { AbstractState } from '../utils/state-manager/state-manager-abstract-state';

type TasksState = {
  tasks: Task[];
};

@Injectable()
export class StateManagerTESTING extends AbstractState<TaskState> {
  private initState: TasksState = {
    tasks: []
  };

  stateManager = new StateManager(this.initState);

  // private _state$ =

  protected stateManger: StateManager<TaskState>;
  select(selectPipe: any): void {
    throw new Error('Method not implemented.');
  }
  action(data: Partial<TaskState>): void {
    throw new Error('Method not implemented.');
  }

  // constructor() {
  //   console.log(this.stateManager);
  // }
}
