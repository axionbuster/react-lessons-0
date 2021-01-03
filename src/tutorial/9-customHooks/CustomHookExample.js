import React from 'react';
import useFetch from './UseFetch';
import User from './User';

// Original lecturer's site isn't available, so we're subsituting it with this.
const url = 'https://api.github.com/users';

const CustomHookExample = () => {
  const { users } = useFetch(url);
  return (
    <div>
      <h2>Users</h2>
      <section>
        {users.map((user) => (
          <User key={user.id} name={user.login} />
        ))}
      </section>
    </div>
  );
};

export default CustomHookExample;
