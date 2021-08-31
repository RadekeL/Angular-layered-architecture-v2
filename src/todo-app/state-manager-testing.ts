import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, pluck } from 'rxjs';
import { Observable } from 'rxjs';
import { first, map, mergeMap, tap, toArray } from 'rxjs/operators';
import { USER_ID } from '../consts';
import { Task } from '../interfaces/task.interface';
import { TaskEditableData } from '../types/tasks.types';
import { StateManager } from '../utils/state-manager/state-manager';

type TasksState = {
  tasks: Task[];
};

@Injectable()
export class StateManagerTESTING {
  private initState: TasksState = {
    tasks: []
  };

  // private _state$ =

  constructor() {
    console.log('stateManager');
  }
}
