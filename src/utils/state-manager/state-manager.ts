import { NullTemplateVisitor } from "@angular/compiler/public_api";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

type State = {
  xx: 1
}


@Injectable()
export class StateManager {
    private _initState: State = null;

    private _state$ = new BehaviorSubject<State>(this._initState)

    public state$: Observable<State> = this._state$.asObservable();

    select() {
      // 
    }


    action() {

    }
}