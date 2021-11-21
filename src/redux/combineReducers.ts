import { CombineReducerState, Reducer } from "./types";

export function combineReducers<
  ReducersConfig = any,
  Action = { type: any; payload?: any }
>(config: {
  [key in keyof ReducersConfig]: Reducer<CombineReducerState, Action>;
}): Reducer<CombineReducerState, Action> {
  return function reducer(state, action) {
    const newState: CombineReducerState = {} as CombineReducerState;
    Object.entries(config).forEach(([key, value]) => {
      if (state === undefined) {
        newState[key] = (value as Reducer<CombineReducerState, Action>)(
          undefined,
          action
        );
      } else {
        newState[key] = (value as Reducer<CombineReducerState, Action>)(
          state[key],
          action
        );
      }
    });
    return newState;
  };
}
