import { StateManager } from './state-manager';

export abstract class AbstractState<StateType> {
  protected stateManger: StateManager<StateType>;

  // what is unary function ????
  // export type StateSelector<StateType, ReturnType> = UnaryFunction<Observable<StateType>, Observable<ReturnType>>;

  select(selectPipe) {
    this.stateManger.state$.pipe(
      // tu będziemy wklejąc pipe - JAK TO SIĘ DZIEJE?
      selectPipe
    );
  }
  action() {}
}
