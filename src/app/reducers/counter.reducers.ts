import { Action } from "@ngrx/store";

// Describe it for TypeScript
export interface CounterState {
  current: number;
}

// What the "state" of this will be when the application starts
const initialState: CounterState = {
  current: 0
}

export function reducer(state: CounterState = initialState, action: Action): CounterState {
  return state;
}
