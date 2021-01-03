import React from 'react';

// This is a specific of the router api.
import { Link } from 'react-router-dom';

const Error = () => (
  <div>
    <h1>Error Page</h1>

    {/* can be made to look like a button using CSS */}
    <Link to="/" className="btn">Home</Link>
  </div>
);

export default Error;
