const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const schema = new Schema(
  {
    id: String,
    name: String
  }
);

const user = mongoose.model('user',schema);

module.exports = user;
