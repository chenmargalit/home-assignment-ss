const md5 = require('md5');
const { validateValues } = require('../../../utils/validation');

const commentsController = (server) => {
  const getComments = async () => {
    const { find } = server.queries;
    const { Comment } = server.models;
    return await find(Comment);
  };

  const createComment = async (values) => {
    const { isEmailValid, isMessageValid } = validateValues(values);
    if (!isEmailValid || !isMessageValid) {
      return 'input is not valid';
    }
    const mdHash = md5(values.email.trim().toLowerCase());
    values.image = mdHash;
    const { create } = server.queries;
    const { Comment } = server.models;
    return await create(Comment, values);
  };

  return { getComments, createComment };
};

module.exports = commentsController;
