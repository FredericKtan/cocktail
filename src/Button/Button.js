import React from 'react';
import PropTypes from 'prop-types';

import styles from './Button.scss';

export const Button = ({ onClick, value }) => (
  <button
    className={styles.view}
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
