/* eslint react/prop-types: "warn" */

// from tutorial 7

import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import data from '../6-useReducer/data';

// Provider and Consumer
// Provider distributes information. The provider is a React component.
// Consumer uses it.
// Typically contexts are global.

const PersonContext = React.createContext();

const ContextAPIExample = () => {
  const [people, setPeople] = useState(data);

  const removePerson = (id) => {
    setPeople((ppl) => ppl.filter((person) => person.id !== id));
  };

  return (
    // wrap the whole component
    <PersonContext.Provider value={{ removePerson }}>
      <h3>Prop Drilling</h3>
      <List people={people} />
    </PersonContext.Provider>
  );
};

const List = ({ people }) => (
  <>
    {people.map((person) => (
      <SinglePerson key={person.id} id={person.id} name={person.name} />
    ))}
  </>
);

List.propTypes = {
  people: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};

const SinglePerson = ({ id, name }) => {
  const { removePerson } = useContext(PersonContext);

  return (
    <div className="item" key={id}>
      <h4>{name}</h4>
      <button type="button" onClick={() => removePerson(id)}>
        Remove
      </button>
    </div>
  );
};

SinglePerson.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default ContextAPIExample;
