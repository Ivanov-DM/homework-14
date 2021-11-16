export type Reducer<State, Action> = (
  state: State | undefined,
  action: Action
) => State;

export type Store<State = any, Action = { type: string }> = {
  getState(): State;
  dispatch(action: Action): any;
  subscribe(cb: () => void): () => void;
  replaceReducer(nextReducer: Reducer<State, Action>): void;
};

export type Middleware<State, Action> = (
  store: Store<State, Action>
) => (next: (action: Action) => any) => (action: Action) => any;
