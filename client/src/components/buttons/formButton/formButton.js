import React from 'react';
import styles from './formButton.module.css';

const FormButton = ({ text, onSubmit, values }) => {
  return <button className={styles.button}>{text}</button>;
};

export default FormButton;
