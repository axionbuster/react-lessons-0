/* eslint max-len: "warn" */

import React, { useState, useReducer } from 'react';
import Modal from './Modal';
import data from './data';

const reducer = (state, action) => {
  // Must return the state! Even if modified.
  if (action.type === 'TESTING') {
    // catch the type of action
    const newItems = [...state.people, action.payload];
    return {
      ...state,
      people: newItems,
      isModalOpen: true,
      modalContent: 'item added',
    };
  }

  if (action.type === 'NO-VALUE') {
    return {
      ...state,
      isModalOpen: true,
      modalContent: 'no value',
    };
  }

  if (action.type === 'CLOSE-MODAL') {
    return { ...state, isModalOpen: false };
  }

  if (action.type === 'REMOVE-ITEM') {
    const newPeople = state.people.filter(
      (person) => person.id !== action.payload,
    );
    return { ...state, people: newPeople };
  }
  throw new Error('no matching action type');
};

const defaultState = {
  people: data,
  isModalOpen: false,
  modalContent: 'Hello, world',
};

const SimpleTutorial = () => {
  const [name, setName] = useState('');
  const [state, dispatch] = useReducer(reducer, defaultState);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name) {
      const newItem = { id: new Date().getTime().toString(), name };
      dispatch({ type: 'TESTING', payload: newItem });
    } else {
      dispatch({ type: 'NO-VALUE' });
    }
  };

  const closeModal = () => dispatch({ type: 'CLOSE-MODAL' });

  return (
    <>
      {state.isModalOpen && (
        <Modal modalContent={state.modalContent} closeModal={closeModal} />
      )}
      <form onSubmit={handleSubmit} className="form">
        <div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
      </form>
      {state.people.map((person) => (
        <div key={person.id}>
          <h4>{person.name}</h4>
          <button
            type="button"
            onClick={() => dispatch({ type: 'REMOVE-ITEM', payload: person.id })}
          >
            Remove
          </button>
        </div>
      ))}
    </>
  );
};

export default SimpleTutorial;
