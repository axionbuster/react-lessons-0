import React from 'react';

// This is a specific of the router api.
import { Link } from 'react-router-dom';

const Navbar = () => (
  <>
    <p>This is the Nav bar.</p>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/people">People</Link>
        </li>
      </ul>
    </nav>
  </>
);

export default Navbar;
