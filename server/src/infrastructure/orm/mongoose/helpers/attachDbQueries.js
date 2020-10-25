const queries = (server) => {
  server.queries = require('../queries/subQueries');
  return server.queries;
};

module.exports = { queries };
