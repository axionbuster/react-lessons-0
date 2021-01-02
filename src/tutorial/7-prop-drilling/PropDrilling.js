/* eslint react/prop-types: "warn" */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import data from '../6-useReducer/data';

const PropDrilling = () => {
  const [people, setPeople] = useState(data);

  const removePerson = (id) => {
    setPeople((ppl) => ppl.filter((person) => person.id !== id));
  };

  return (
    <section>
      <h3>Prop Drilling</h3>
      <List people={people} removePerson={removePerson} />
    </section>
  );
};

const List = ({ people, removePerson }) => (
  <>
    {people.map((person) => (
      <SinglePerson
        key={person.id}
        id={person.id}
        name={person.name}
        removePerson={removePerson}
      />
    ))}
  </>
);

List.propTypes = {
  people: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
  removePerson: PropTypes.func.isRequired,
};

const SinglePerson = ({ id, name, removePerson }) => (
  <div className="item" key={id}>
    <h4>{name}</h4>
    <button type="button" onClick={() => removePerson(id)}>
      Remove
    </button>
  </div>
);

SinglePerson.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  removePerson: PropTypes.func.isRequired,
};

export default PropDrilling;
