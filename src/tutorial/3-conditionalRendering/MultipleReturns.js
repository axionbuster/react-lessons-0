import React, { useState, useEffect } from 'react';

// Nonexistent user example.
// const url = 'https://api.github.com/users/omors';
// Existent user example.
const url = 'https://api.github.com/users/axionbuster';

const MultipleReturns = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState('default user');

  useEffect(() => {
    fetch(url)
      .then((response) => {
        if (response.status >= 200 && response.status < 300) {
          return response.json();
        }
        setIsLoading(false);
        setIsError(true);
        throw new Error(response.statusText);
      })
      .then((myUser) => {
        const { login } = myUser;
        setUser(login);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsError(true);
        console.log(error);
      });
  }, []);

  // The main lesson of this snippet is that the returned component can depend
  // on the state of the object.

  if (isLoading) {
    return (
      <div>
        <h2>Loading...</h2>
      </div>
    );
  }

  if (isError) {
    return (
      <div>
        <h2>Error...</h2>
      </div>
    );
  }

  return (
    <div>
      <h2>{user}</h2>
    </div>
  );
};

export default MultipleReturns;
