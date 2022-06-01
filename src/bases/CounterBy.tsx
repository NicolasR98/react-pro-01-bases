/* eslint-disable no-shadow */
import React, { useState } from 'react';

interface Props {
  initialValue?: number;
  incrementValue?: number;
}

interface CounterState {
  count: number;
  clicks: number;
}

export const CounterBy = ({ initialValue = 5, incrementValue = 1 }: Props) => {
  const [{ count, clicks }, setCounterState] = useState<CounterState>({
    count: initialValue,
    clicks: 0,
  });

  const handleClick = (value: number = incrementValue): void => {
    setCounterState(({ clicks, count }) => ({
      count: count + value,
      clicks: clicks + 1,
    }));
  };

  return (
    <>
      <h1>
        Counter By:
        {' '}
        {count}
      </h1>
      <h1>
        Clicks:
        {' '}
        {clicks}
      </h1>

      <button
        onClick={() => handleClick(1)}
        type="button"
      >
        +1
      </button>
      <button
        onClick={() => handleClick(5)}
        type="button"
      >
        +1
      </button>
    </>
  );
};
