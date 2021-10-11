import { ActionReducer, ActionReducerMap } from '@ngrx/store';
import * as fromCounter from './counter.reducers';


export interface AppState {
  // Just for typescript - interfaces to nothing for JavaScript
  counter: fromCounter.CounterState
}

export const reducers: ActionReducerMap<AppState> = {
  counter: fromCounter.reducer
}
