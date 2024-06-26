import { useEffect } from 'react';

export const useInputEffect = (callback: () => void) => {
  useEffect(() => {
    const handleInput = () => {
      callback();
    };

    // Attach the event listener to all input and textarea elements
    const inputs = document.querySelectorAll('input, textarea');
    inputs.forEach(input => {
      input.addEventListener('input', handleInput);
    });

    // Clean up
    return () => {
      inputs.forEach(input => {
        input.removeEventListener('input', handleInput);
      });
    };
  }, [callback]);
};