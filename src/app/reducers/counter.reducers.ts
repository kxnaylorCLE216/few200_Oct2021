import { Action, on, createReducer } from "@ngrx/store";
import * as actions from '../actions/counter.action'

// Describe it for TypeScript
export interface CounterState {
  current: number;
}

// What the "state" of this will be when the application starts
const initialState: CounterState = {
  current: 0
}

const reducerFunction = createReducer(
  initialState,
  on(actions.countIncremented, (s, a) => ({ ...s, current: s.current + 1 })),
  on(actions.countDecremented, (s, a) => ({ ...s, current: s.current - 1 })),
  // on(actions.countReset, (s, a) => ({ ...s, current: s.current - s.current }))
  on(actions.countReset, (s, a) => (initialState))
)

export function reducer(state: CounterState = initialState, action: Action): CounterState {
  return reducerFunction(state, action);
}



