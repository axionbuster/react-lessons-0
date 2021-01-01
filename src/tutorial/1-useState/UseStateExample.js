import React, { useState } from 'react';
import PeopleList from './PeopleList';

const UseStateExample = () => {
  const [title, setTitle] = useState('Title');

  const handleClick = () => {
    if (title === 'Title') {
      setTitle('oh');
    } else {
      setTitle('Title');
    }
  };

  // <> ... </> is a short syntax for declaring a React.Fragment. See
  // https://reactjs.org/docs/fragments.html#short-syntax

  return (
    <>
      <h2>{title}</h2>
      <button type="button" className="btn" onClick={handleClick}>
        Button
      </button>
      <PeopleList />
    </>
  );
};

export default UseStateExample;
