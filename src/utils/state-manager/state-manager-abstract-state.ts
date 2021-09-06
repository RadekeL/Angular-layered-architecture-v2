import { StateManager } from './state-manager';

export abstract class AbstractState<StateType> {
  protected stateManager: StateManager<StateType>;

  // what is unary function ????
  // export type StateSelector<StateType, ReturnType> = UnaryFunction<Observable<StateType>, Observable<ReturnType>>;

  select(selectPipe) {
    return this.stateManager.selectState$.pipe(selectPipe);
  }
  action(data: Partial<StateType>) {
    this.stateManager.update(data);
  }

}
