import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles';

export const Button = ({ onClick, style, value }) => (
  <button
    onClick={onClick}
    style={{ ...styles.view, ...style }}
  >
    { value }
  </button>
);

Button.propTypes = {
  onClick: PropTypes.func,
  value: PropTypes.string,
  style: PropTypes.objectOf(PropTypes.string),
};

Button.defaultProps = {
  onClick: () => {},
  value: '',
  style: {},
};

export default Button;
