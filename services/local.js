const passport = require('passport');
const LocalStrategy = require('passport-local');
const chalk = require('chalk');
// const bcrypt = 

const User = require('../models/user');

passport.use(new LocalStrategy(async (email,password,done) => {
  try {
    await User.findOne({
      email: email
    }, (err, user) => {
      if(err) return done(err);

      if(!user) return done(null,false);

      if(user.password !== passport) {
        return done(null, false)
      }
      console.log(chalk.green('success'));
      return done(null,user)
    });
  } catch (error) {
    console.log(chalk.red(error.message));
  }
}))