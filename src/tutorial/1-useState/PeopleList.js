import React, { useState } from 'react';

import peopleList from './data';

const ListNames = () => {
  const [people, setPeople] = useState(peopleList);

  const handleClick = () => {
    setPeople([]);
  };

  const removeItem = (id) => {
    const newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };

  return (
    <>
      <button type="button" onClick={handleClick}>
        Remove all
      </button>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button type="button" onClick={() => removeItem(id)}>
              Remove This Person
            </button>
          </div>
        );
      })}
    </>
  );
};

export default ListNames;
