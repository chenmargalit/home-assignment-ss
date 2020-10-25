import React, { useState } from 'react';
import axios from 'axios';

import FormButton from '../buttons/formButton/formButton';
import styles from './createCommentForm.module.css';
import useForm from './useForm';

import { validateValues, emailValidationErr, messageValidationErr } from '../../utils/validation';

// should be in an .env file, its here to make the code sharing easier.
const BASE_URL = 'http://localhost:5000';

const CreateCommentForm = () => {
  const [error, setError] = useState({});

  const { handleChange, values } = useForm();

  const areValuesValid = () => {
    const { isEmailValid, isMessageValid } = validateValues(values);
    if (!isEmailValid) {
      return setError({ email: emailValidationErr });
    }
    if (!isMessageValid) {
      return setError({ message: messageValidationErr });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    areValuesValid(values);
    const res = await axios.post(`${BASE_URL}/comments/create`, { values });
    console.log('res is', res.data);
  };

  return (
    <div className={styles.container}>
      <form data-test='form' onSubmit={handleSubmit} className={styles.form}>
        <input
          data-test='input'
          className={styles.inputEmail}
          type='text'
          placeholder='Email'
          name='email'
          autoFocus={true}
          value={values.email}
          onChange={handleChange}
        />

        {error.email && <h3>{error.email}</h3>}

        <textarea
          data-test='input'
          className={styles.inputMessage}
          type='text'
          placeholder='Message'
          name='message'
          value={values.message}
          onChange={handleChange}
        />
        {error.message && <h3>{error.message}</h3>}

        <div className={styles.buttonContainer}>
          <FormButton text={'submit'} onSubmit={handleSubmit} values={values} />
        </div>
      </form>
    </div>
  );
};

export default CreateCommentForm;
