import React from 'react';
import PropTypes from 'prop-types';

const User = ({ name }) => {
  const realName = name || 'no name specified';
  return (
    <div>
      <h4>{realName}</h4>
    </div>
  );
};

// Prop type validation is needed because APIs can always be defective
// (e.g. missing values, wrong type, etc.)
User.propTypes = {
  name: PropTypes.string.isRequired,
};

export default User;
