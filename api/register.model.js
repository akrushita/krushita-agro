const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Business
let Register = new Schema({
  email: {
    type: String
  },
  password: {
    type: String
  }
},{
    collection: 'Register'
});

module.exports = mongoose.model('Register', Register);