import { CounterState } from '../interfaces/interfaces';
import { CounterAction } from '../actions/actions';

const INITIAL_STATE: CounterState = {
  counter: 0,
  previous: 0,
  changes: 0,
};

export const counterReducer = (state: CounterState, action: CounterAction): CounterState => {
  switch (action.type) {
    case 'increaseBy':
      return {
        changes: state.changes + 1,
        previous: state.counter,
        counter: state.counter + action.payload.value,
      };

    case 'reset':
      return INITIAL_STATE;

    default:
      return state;
  }
};
