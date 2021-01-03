import React, { useState, useEffect } from 'react';

import { Link, useParams } from 'react-router-dom';
import data from '../6-useReducer/data';

// useParams allows to use parameters

const Person = () => {
  const [name, setName] = useState('default name');
  const { id } = useParams();

  useEffect(() => {
    const newPerson = data.find((person) => person.id === id);
    setName(newPerson.name);
  }, []);

  return (
    <div>
      <h1>{name}</h1>
      <Link to="/people" className="btn">Back to People</Link>
    </div>
  );
};

export default Person;
