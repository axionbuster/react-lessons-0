/* eslint no-unused-vars: "warn" */

import React, { useState, useEfect } from 'react';

const ShortCircuit = () => {
  const [text, setText] = useState('1');
  // const firstValue = text || 'hello world';
  // const secondValue = text && 'hello world';

  return (
    <>
      {/* <h1>{firstValue}</h1>
      <h1>value : {secondValue}</h1> */}
      <h1>{text || 'default' /* print 'default' if text is falsy */}</h1>
      {text && <h1>hello world</h1> /* print if text is truthy */}
      {!text && <h1>empty world</h1> /* print if text is falsy */}
    </>
  );
};

export default ShortCircuit;
