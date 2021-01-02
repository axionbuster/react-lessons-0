/* eslint camelcase: "warn" */

import React, { useState, useEffect } from 'react';

const url = 'https://api.github.com/users';

const UseEffectFetch = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const response = await fetch(url);
    setUsers(await response.json());
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <h3>GitHub users</h3>
      <ul>
        {users.map((user) => {
          const {
            id, login, avatar_url, html_url,
          } = user;
          return (
            <li key={id}>
              <img src={avatar_url} alt={login} />
              <div>
                <h4>{login}</h4>
                <a href={html_url}>Profile</a>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default UseEffectFetch;
