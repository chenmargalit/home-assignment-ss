import { isEmail, isLength } from 'validator';

export const emailValidationErr = 'please insert a valid email';
export const messageValidationErr = 'Message must be between 1 and 100 chars';

export const validateValues = (values) => {
  const { email, message } = values;
  const isEmailValid = isEmail(email);
  const isMessageValid = isLength(message, { min: 1, max: 100 });

  return { isEmailValid, isMessageValid };
};
