import { useLayoutEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

const MAX_COUNT = 10;

export const CounterEffect = () => {
  const [counter, setCounter] = useState(5);
  const counterElement = useRef<HTMLHeadingElement>(null);
  const tl = gsap.timeline();

  useLayoutEffect(() => {
    if (counter < MAX_COUNT) return;
    console.log('%cMax count exceded', 'color: red; , background-color: black');

    tl.to(counterElement.current, { y: -10, duration: 0.2, ease: 'ease.out' })
      .to(counterElement.current, { y: 0, duration: 0.8, ease: 'bounce.out' });
  }, [counter]);

  const handleClick = (): void => {
    setCounter((prevCount) => Math.min(prevCount + 1, MAX_COUNT));
  };

  return (
    <>
      <h1>CounterEffect:</h1>
      <h2
        ref={counterElement}
      >
        {counter}
      </h2>

      <button
        onClick={handleClick}
        type="button"
      >
        +1
      </button>
    </>
  );
};
