import { NullTemplateVisitor } from '@angular/compiler/public_api';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

type State = {
  xx?: 1;
};

@Injectable()
export class StateManager<StateType> {
  private _initState: StateType = null;

  private _state$ = new BehaviorSubject<StateType>(this._initState);

  public state$: Observable<StateType> = this._state$.asObservable();

  update(data: Partial<StateType>) {
    this._state$.next({
      ...this._state$.getValue(),
      ...data
    });
  }

  stateSnapshot(): StateType {
    return this._state$.getValue();
  }
}
