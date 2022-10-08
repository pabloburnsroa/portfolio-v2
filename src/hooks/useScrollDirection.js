import { useEffect } from 'react';
import { useState } from 'react';

const useScrollDirection = () => {
  // Scroll direction
  const [scrollDirection, setScrollDirection] = useState(null);
  // Previous scrolled amount from top of page
  const [prevOffset, setPrevOffSet] = useState(0);

  const toggleScrollDirection = () => {
    // Scrolled amount
    let scrollY = window.scrollY;
    if (scrollY === 0) {
      setScrollDirection(null);
    }
    // Set scroll direction
    if (scrollY > prevOffset) {
      setScrollDirection('down');
    } else if (scrollY < prevOffset) {
      setScrollDirection('up');
    }

    setPrevOffSet(scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleScrollDirection);

    return () => {
      window.removeEventListener('scroll', toggleScrollDirection);
    };
  });

  return scrollDirection;
};

export default useScrollDirection;
