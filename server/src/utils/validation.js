const { isEmail, isLength } = require('validator');

const emailValidationErr = 'please insert a valid email';
const messageValidationErr = 'Message must be between 1 and 100 chars';

const validateValues = (values) => {
  const { email, message } = values;
  const isEmailValid = isEmail(email);
  const isMessageValid = isLength(message, { min: 1, max: 100 });

  return { isEmailValid, isMessageValid };
};

module.exports = { emailValidationErr, messageValidationErr, validateValues };
