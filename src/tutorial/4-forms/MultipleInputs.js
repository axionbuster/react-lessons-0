/* eslint no-unused-vars: "warn" */

import React, { useState } from 'react';

const MultipleInputs = () => {
  const emptyPerson = { firstName: '', email: '', age: '' };
  const [person, setPerson] = useState({ ...emptyPerson });
  const [people, setPeople] = useState([]);

  const handleChange = (e) => {
    const { name } = e.target;
    const { value } = e.target;
    setPerson((p) => {
      const newP = { ...p, [name]: value };
      console.log(newP);
      return newP;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (person.firstName && person.email && person.age) {
      setPeople((oldPeople) => {
        const newPerson = { ...person, id: new Date().getTime().toString() };
        const newArray = [...oldPeople, newPerson];
        setPerson({ ...emptyPerson });
        return newArray;
      });
    }
  };

  return (
    <>
      <article>
        <form className="form-control">
          <label htmlFor="firstName">
            Name:
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={person.firstName}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="email">
            Email:
            <input
              type="text"
              id="email"
              name="email"
              value={person.email}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="age">
            Age:
            <input
              type="text"
              id="age"
              name="age"
              value={person.age}
              onChange={handleChange}
            />
          </label>
          <button type="button" onClick={handleSubmit}>
            Add Person
          </button>
        </form>
      </article>
      {people.map((myPerson) => (
        <div className="item" key={myPerson.id}>
          <h4>{myPerson.name}</h4>
          <p>{myPerson.email}</p>
          <p>{myPerson.age}</p>
        </div>
      ))}
    </>
  );
};

export default MultipleInputs;
