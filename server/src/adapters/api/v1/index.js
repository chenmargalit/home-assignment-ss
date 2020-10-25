const activateCommentController = require('./comments');

const express = require('express');
const router = express.Router();

const comments = (server) => {
  router.use('/', activateCommentController(server));
  return router;
};

module.exports = comments;
