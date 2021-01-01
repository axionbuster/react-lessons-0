import React, { useState } from 'react';

const UseStateExample = () => {
  const [title, setTitle] = useState('Title');

  const handleClick = () => {
    setTitle('oh');
  };

  // <> ... </> is a short syntax for declaring a React.Fragment. See
  // https://reactjs.org/docs/fragments.html#short-syntax

  return (
    <>
      <h2>{title}</h2>
      <button type="button" className="btn" onClick={handleClick}>
        Button
      </button>
    </>
  );
};

export default UseStateExample;
