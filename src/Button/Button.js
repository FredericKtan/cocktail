import React from 'react';
import PropTypes from 'prop-types';

export const Button = ({ onClick, value }) => (
  <button
    onClick={onClick}
  >
    { value }
  </button>
);

Button.propTypes = {
  onClick: PropTypes.func,
  value: PropTypes.string,
};

Button.defaultProps = {
  onClick: () => {},
  value: '',
};

export default Button;
