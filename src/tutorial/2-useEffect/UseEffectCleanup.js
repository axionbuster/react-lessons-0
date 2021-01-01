import React, { useState, useEffect } from 'react';

const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth);

  const checkSize = () => {
    setSize(window.innerWidth);
  };

  useEffect(() => {
    console.log('hello, world!');
    window.addEventListener('resize', checkSize);

    // This is invoked each time it exits.
    return () => {
      console.log('cleanup');
      window.removeEventListener('resize', checkSize);
    };
  });

  console.log(size);

  return (
    <>
      <h1>window</h1>
      <h2>
        {size}
        {' '}
        px
      </h2>
    </>
  );
};

export default UseEffectCleanup;
