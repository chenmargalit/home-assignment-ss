import React, { FC } from 'react';
import styles from './card.module.css';

const Card = ({ children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.cardBox}>{children}</div>
    </div>
  );
};

export default Card;
