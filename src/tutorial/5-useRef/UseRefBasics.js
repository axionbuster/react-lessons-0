import React, { useEffect, useRef } from 'react';

// Refs:
//  1. Preserve value
//  2. Does NOT trigger re-render
//  3. Targets DOM nodes and eelements.

const UseRefBasics = () => {
  const refContainer = useRef(null);
  const divContainer = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(refContainer.current.value);
    console.log(divContainer.current);
  };

  // it's ok to not put [] because no re-render.
  useEffect(() => {
    console.log(refContainer.current);
    refContainer.current.focus();
  });

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <div>
          <input type="text" ref={refContainer} />
          <button type="submit">Submit</button>
        </div>
      </form>
      <div ref={divContainer}>Hello world</div>
    </>
  );
};

export default UseRefBasics;
