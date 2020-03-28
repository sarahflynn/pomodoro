import { Reducer, Dispatch } from 'redux';
import produce from 'immer';
import { Action, SimpleAction } from '../types/redux-types';

export enum ActionTypes {
  SET_TIME_REMAINING = 'pomodoro/timer/SET_TIME_REMAINING',
  START_STOP = 'pomodoro/timer/START_STOP',
}

export type Actions =
  | SimpleAction<ActionTypes.START_STOP>
  | Action<ActionTypes.SET_TIME_REMAINING, { sec: number }>;

export interface StateShape {
  timeRemaining: Time;
  timerRunning: boolean;
}

export const initialState: StateShape = {
  timeRemaining: 1500,
  timerRunning: false,
};

const reducer: Reducer<StateShape, Actions> = (
  state: StateShape = initialState,
  action: Actions | null = { type: null, payload: null },
): StateShape =>
  produce(state, (draft): void | StateShape => {
    switch (action.type) {
      // starts and stops the timer
      case ActionTypes.START_STOP:
        draft.timerRunning = !initialState.timerRunning;
        break;

      // adjusts time remaining by adding # of sec (+ or -) to current time remaining
      case ActionTypes.SET_TIME_REMAINING:
        draft.timeRemaining = initialState.timeRemaining + action.payload.sec;
        break;

      // no default
    }
  });

export default reducer;

// starts and stops the session timer
export const startStop = (): SimpleAction<string> => ({
  type: ActionTypes.START_STOP,
});

// adjusts time remaining by adding # of sec (+ or -) to current time remaining
export const setTimeRemaining = (sec: number): Action<string, Payload> => ({
  type: ActionTypes.SET_TIME_REMAINING,
  payload: {
    sec,
  },
});
