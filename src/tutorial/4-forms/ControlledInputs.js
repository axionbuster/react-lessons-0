import React, { useState } from 'react';

const ControlledInputs = () => {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [people, setPeople] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (firstName && email) {
      const person = { firstName, email };
      setPeople((oldPeople) => [...oldPeople, person]);
      console.log(people);
    } else {
      console.log('empty field');
    }
  };

  return (
    <>
      <article>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="firstName">
              Name:
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </label>
          </div>
          <div className="form-control">
            <label htmlFor="email">
              Email:
              <input
                type="text"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
          </div>
          <button type="submit">Add Person</button>
        </form>
      </article>
      {people.map((person) => {
        const { id, firstName2, email2 } = {
          id: new Date().getTime().toString(),
          firstName2: person.firstName,
          email2: person.email,
        };
        return (
          <div key={id} className="item">
            <div>
              <h4>{firstName2}</h4>
              <p>{email2}</p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ControlledInputs;
