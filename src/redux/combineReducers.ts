// import { Reducer } from "./types";
//
// type State<ReducersConfig> = {
//   [key in keyof ReducersConfig]: ReducersConfig[key];
// };
//
// export function combineReducers<
//   ReducersConfig = any,
//   Action = { type: any }
// >(config: {
//   [key in keyof ReducersConfig]: Reducer<State<ReducersConfig>, Action>;
// }) {
//   return function reducer(
//     state: State<ReducersConfig> | undefined,
//     action: Action
//   ): State<ReducersConfig> {
//     const newState: State<ReducersConfig> = {} as State<ReducersConfig>;
//
//     // @ts-ignore
//     const entries: [
//       key: keyof ReducersConfig,
//       value: Reducer<State<ReducersConfig>, Action>
//     ][] = Object.entries(config);
//     entries.forEach(([key, value]) => {
//       if (state === undefined) {
//         // @ts-ignore
//         newState[key] = value(undefined, action);
//       } else {
//         // @ts-ignore
//         newState[key] = value(state[key], action);
//       }
//     });
//     return newState;
//   };
// }

// export function combineReducers<
//   ReducersConfig = any,
//   Action = { type: any }
// >(config: {
//   [key in keyof ReducersConfig]: (
//     state: ReducersConfig[key] | undefined,
//     action: Action
//   ) => ReducersConfig[key];
// }): (
//   state: { [key in keyof ReducersConfig]: ReducersConfig[key] } | undefined,
//   action: Action
// ) => any {
//   return function reducer(state, action) {
//     const newState = {};
//     Object.entries(config).forEach(([key, value]) => {
//       if (state === undefined) {
//         // @ts-ignore
//         newState[key] = value(undefined, action);
//       } else {
//         // @ts-ignore
//         newState[key] = value(state[key], action);
//       }
//     });
//     return newState;
//   };
// }

type State<ReducersConfig = any> = {
  [key in keyof ReducersConfig]: ReducersConfig[key];
};

type Reducer<Action = { type: any }> = (
  state: State | undefined,
  action: Action
) => State;

export function combineReducers<
  ReducersConfig = any,
  Action = { type: any }
>(config: {
  [key in keyof ReducersConfig]: Reducer<Action>;
}): (state: State | undefined, action: Action) => State {
  return function reducer(state, action) {
    const newState: State = {} as State;
    Object.entries(config).forEach(([key, value]) => {
      if (state === undefined) {
        newState[key] = (value as Reducer<Action>)(undefined, action);
      } else {
        newState[key] = (value as Reducer<Action>)(state[key], action);
      }
    });
    return newState;
  };
}
