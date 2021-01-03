import { useState, useEffect } from 'react';

// The prefix "use" signifies that this function is a hook.
// Hooks can only be called in either containers or hooks.
const useFetch = (url) => {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const response = await fetch(url);
    const respUsers = await response.json();
    setUsers(respUsers);
    setLoading(false);
  };

  // Call this hook when url changes.
  useEffect(() => {
    getUsers();
  }, [url]);

  // return two state values
  return { loading, users };
};

export default useFetch;
