const models = async (server) => {
  server.models = require('../schemas');

  return server.models;
};

module.exports = { models };
