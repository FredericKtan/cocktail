import React from 'react';
import PropTypes from 'prop-types';

export const VerticalLayout = ({ children }) => (
  <div>
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
