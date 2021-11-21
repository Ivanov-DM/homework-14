export type CombineReducerState<ReducersConfig = any> = {
  [key in keyof ReducersConfig]: ReducersConfig[key];
};

export type Reducer<State, Action> = (
  state: State | undefined,
  action: Action
) => State;

export type Store<State, Action = { type: string }> = {
  getState(): State;
  dispatch(action: Action): any;
  subscribe(cb: () => void): () => void;
  replaceReducer(nextReducer: Reducer<State, Action>): void;
};

export type Middleware<Action> = (
  store: Store<Action>
) => (next: (action: Action) => any) => (action: Action) => any;
