import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StateManager } from '../utils/state-manager/state-manager';
import { AbstractState } from '../utils/state-manager/state-manager-abstract-state';

type TasksState = {
  tasks: any[];
};

const initState: TasksState = {
  tasks: [12]
};
@Injectable()
export class StateManagerTESTING extends AbstractState<TasksState> {
  protected stateManager = new StateManager(initState);
}
