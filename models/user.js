const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  provider: String,
  providerId: String,
  name: {
    type: String,
    required: true
  },
  email: String,
  password: String,
  created: {
    type: Date,
    required: true,
    default: Date.now()
  }
});

module.exports = User = mongoose.model('user', userSchema);
