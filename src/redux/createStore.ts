import { Store, Reducer, Middleware } from "./types";

export function createStore<State, Action>(
  reducer: Reducer<State, Action>,
  preloadedState?: State,
  middlewares?: Middleware<State, Action>[]
): Store<State, Action> {
  let state: State = <State>preloadedState;
  let subscribers: (() => void)[] = [];
  let currentReducer: Reducer<State, Action> = reducer;
  return {
    getState(): State {
      return state;
    },
    dispatch(action: Action): any {
      state = currentReducer(state, action);
      subscribers.forEach((subscriber: () => void) => subscriber());
    },
    subscribe(cb: () => void): () => void {
      subscribers.push(cb);
      return () => {
        subscribers = subscribers.filter((item) => item !== cb);
      };
    },
    replaceReducer(nextReducer: Reducer<State, Action>): void {
      currentReducer = nextReducer;
    },
  };
}
