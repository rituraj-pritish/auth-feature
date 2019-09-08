const passport = require('passport');
const User = require('../models/user');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id,() => {
    done(err,user);
  } );
});

require('./google');
require('./local');
