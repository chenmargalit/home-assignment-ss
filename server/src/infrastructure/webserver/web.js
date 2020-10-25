const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const comments = require('../../adapters/api/v1/index');

const Mongo = require('../orm/mongoose/index');

const errorHandler = require('../middlewares/apiErrorHandler');

const attachDbModels = require('../orm/mongoose/helpers/attachDbModels');
const attachDbQueries = require('../orm/mongoose/helpers/attachDbQueries');

class Server {
  constructor() {
    this.app = express();
    this.db = new Mongo();
    this.configMongoDb();
    this.startServer();
  }

  async configMongoDb() {
    this.db.connect();
    await attachDbModels.models(this);
    await attachDbQueries.queries(this);
  }

  startServer() {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: true }));
    this.app.use(cors());

    this.app.use('/comments', comments(this));

    this.app.use(errorHandler);

    this.app.listen(5000, () => {
      console.log(`listening on port 5000`);
    });
  }

  async start() {
    return this;
  }
}

const server = new Server();
server.start();

module.exports = Server;
