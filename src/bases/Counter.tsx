import { useState } from 'react';

interface Props {
  initialValue?: number;
}

export const Counter = ({ initialValue = 0 }: Props) => {
  const [counter, setCounter] = useState(initialValue);

  const handleClick = () => {
    setCounter((prevCount) => prevCount + 1);
  };

  return (
    <>
      <h1>
        Count:
        {' '}
        {counter}
      </h1>

      <button
        onClick={handleClick}
        type="button"
      >
        +1
      </button>
    </>
  );
};
