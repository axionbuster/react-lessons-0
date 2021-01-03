import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const PersonButton = ({ id, name }) => (
  <div>
    {/* Goes to /person/0, /person/1, if ids are like '0', '1', and so on. */}
    <Link to={`/person/${id}`}>{name}</Link>
  </div>
);

PersonButton.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default PersonButton;
