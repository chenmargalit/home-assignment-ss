const ApiError = require('./apiError');
// import { ApiError } from './ApiError';

const apiErrorHandler = (err, req, res, next) => {
  let responseErr = {
    statusCode: '',
    message: '',
  };
  if (err instanceof ApiError) {
    return res.status(err.code).json(err.message);
  } else {
    responseErr.statusCode = '500';
    responseErr.message = 'Bad Request';
  }
  console.log('err is', err.details.body);

  return res.status(responseErr.statusCode).json(responseErr.message);
};

module.exports = apiErrorHandler;
