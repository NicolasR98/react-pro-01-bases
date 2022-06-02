import { useReducer } from 'react';
import { counterReducer } from '../reducers/counterReducer';

export interface CounterState {
  counter: number;
  previous: number;
  changes: number;
}

const INITIAL_VALUE: CounterState = {
  counter: 0,
  previous: 0,
  changes: 0,
};

export const CounterWithReducer = () => {
  const [
    { counter, previous, changes },
    dispatch,
  ] = useReducer(counterReducer, INITIAL_VALUE);

  const increaseBy = (value: number = 1): void => {
    dispatch({ type: 'increaseBy', payload: { value } });
  };

  const resetCounter = (): void => {
    dispatch({ type: 'reset' });
  };

  return (
    <>
      <h1>
        Counter with reducer:
      </h1>
      <h2>
        Counter:
        {' '}
        {counter}
      </h2>
      <h2>
        Previous:
        {' '}
        {previous}
      </h2>
      <h2>
        Changes:
        {' '}
        {changes}
      </h2>

      <button
        onClick={() => increaseBy()}
        type="button"
      >
        +1
      </button>
      <button
        onClick={() => increaseBy(2)}
        type="button"
      >
        +2
      </button>
      <button
        onClick={() => increaseBy(5)}
        type="button"
      >
        +5
      </button>
      <button
        onClick={() => resetCounter()}
        type="button"
      >
        Reset
      </button>
    </>
  );
};
