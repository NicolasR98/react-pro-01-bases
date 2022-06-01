import {
  useState, useRef, useLayoutEffect, useEffect,
} from 'react';
import { gsap } from 'gsap';

export const useCounter = ({ maxCount = 10 }) => {
  const [counter, setCounter] = useState(5);
  const elementToAnimate = useRef<any>(null);
  const tl = useRef(gsap.timeline());

  useLayoutEffect(() => {
    if (!tl.current) return;

    tl.current
      .to(elementToAnimate.current, { y: -10, duration: 0.2, ease: 'ease.out' })
      .to(elementToAnimate.current, { y: 0, duration: 0.8, ease: 'bounce.out' })
      .pause();
  }, []);

  useEffect(() => {
    tl.current.play(0);
  }, [counter]);

  const handleClick = (): void => {
    setCounter((prevCount) => Math.min(prevCount + 1, maxCount));
  };

  return {
    counter,
    elementToAnimate,
    handleClick,
  };
};
