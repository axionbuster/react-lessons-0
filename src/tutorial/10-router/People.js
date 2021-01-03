import React from 'react';

import PersonButton from './PersonButton';
import data from '../6-useReducer/data';

const People = () => (
  <div>
    <h1>People Page</h1>
    {data.map((person) => (
      <PersonButton key={person.id} id={person.id} name={person.name} />
    ))}
  </div>
);

export default People;
