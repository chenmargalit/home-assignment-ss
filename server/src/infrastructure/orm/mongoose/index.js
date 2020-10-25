const mongoose = require('mongoose');
const localMongoURI = 'MONGODB_URI=mongodb://localhost/commentsDB';

class Mongo {
  async connect() {
    try {
      await mongoose.connect(localMongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
      console.log('mongo successfully connected');
    } catch (e) {
      console.log('problem connecting to mongo');
    }
  }
}

mongoose.set('bufferCommands', false);

module.exports = Mongo;
