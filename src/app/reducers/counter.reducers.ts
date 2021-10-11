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

  switch (action.type) {
    case 'incremented count': {
      return { current: state.current + 1 }
    }
    case 'decremented count': {
      return { ...state, current: state.current - 1 }
    }
    default: {
      return state;
    }
  }
}


