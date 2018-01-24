import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles';

export const VerticalLayout = ({ children }) => (
  <div style={{ ...styles.view }}>
    { children }
  </div>
);

VerticalLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

VerticalLayout.defaultProps = {
  children: null,
};

export default VerticalLayout;
