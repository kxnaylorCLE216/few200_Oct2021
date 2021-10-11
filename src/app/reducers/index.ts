import { ActionReducer, ActionReducerMap, createSelector } from '@ngrx/store';

import * as fromCounter from './counter.reducers';
import * as fromSettings from './settings.reducer';

export interface AppState {
  // Just for typescript - interfaces to nothing for JavaScript
  counter: fromCounter.CounterState,
  settings: fromSettings.SettingsState
}

export const reducers: ActionReducerMap<AppState> = {
  counter: fromCounter.reducer,
  settings: fromSettings.reducer
}

//Selector per "branch" of your application state.
const selectCounterBranch = (state: AppState) => state.counter;
const selectSettingsBranch = (state: AppState) => state.settings;



export const selectCounterGoal = createSelector(
  selectSettingsBranch,
  b => b.counterGoal
)

export const selectCounterCurrent = createSelector(
  selectCounterBranch,
  b => b.current
)

// export function selectCounterCurrent(state: AppState) {
//   return state.counter.current
// }

export const selectResetDisabled = createSelector(
  selectCounterCurrent,
  c => c === 0
)


// export function selectResetDisabled(state: AppState): boolean {
//   return state.counter.current === 0;
// }

export const selectCountToGoal = createSelector(
  selectCounterCurrent,
  selectCounterGoal,
  (current, goal) => goal - current
)
