import React from 'react';
import PropTypes from 'prop-types';

import stylesJS from './styles';
import stylesCSS from './Button.css';

export const Button = ({ onClick, style, value }) => (
  <button
    className="view"
    onClick={onClick}
    style={{ ...stylesJS.view, ...style }}
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
