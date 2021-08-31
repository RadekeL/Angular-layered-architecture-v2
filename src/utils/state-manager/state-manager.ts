import { NullTemplateVisitor } from '@angular/compiler/public_api';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

type State = {
  xx?: 1;
};

export class StateManager<StateType> {
  private _state$: BehaviorSubject<StateType>;
  public selectState$: Observable<StateType>;

  constructor(initialState: StateType) {
    this._state$ = new BehaviorSubject<StateType>(initialState);
    this.selectState$ = this._state$.asObservable();
  }

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
