import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles';

export const HorizontalLayout = ({ children }) => (
  <div>
    { children }
  </div>
);

HorizontalLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

HorizontalLayout.defaultProps = {
  children: null,
};

export default HorizontalLayout;