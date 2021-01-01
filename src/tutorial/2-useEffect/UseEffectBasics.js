import React, { useState, useEffect } from 'react';

const UseEffectBasics = () => {
  const [value, setValue] = useState(0);

  // The second argument (array) is an array of dependencies.
  //
  // If an empty array is passed, then it only runs on the initial render.
  useEffect(() => {
    // This is called after every render.
    console.log('call useEffect');
    if (value > 0) document.title = `New Messages ${value}`;
  }, [value]);

	// many useEffect hooks can be registered independently.
  useEffect(() => {
    // This is called only on the initial render.
    console.log('hello, world');
  }, []);

  console.log('render component');
  return (
    <>
      <h1>{value}</h1>
      <button type="button" onClick={() => setValue(value + 1)}>
        Click Me!
      </button>
      <p>Use Effect Basics</p>
    </>
  );
};

export default UseEffectBasics;
