import React from 'react';

import styles from './HorizontalLayout.scss';

export const HorizontalLayout = ({ children }) => (
  <div className={styles.view}>
    { children }
  </div>
);

export default HorizontalLayout;