const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth2');
const keys = require('../config/keys');
const chalk = require('chalk');

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.GOOGLE.clientID,
      clientSecret: keys.GOOGLE.clientSecret,
      callbackURL: '/auth/google/callback'
    },
    async (accessToken, refreshToken, profile, done) => {
      console.log(chalk.blue(JSON.stringify(profile)));
      try {
        const existingUser = await User.findOne({
          providerId: profile.id
        });

        if (existingUser) {
          console.log(chalk.red('user already exists'));
          return done(null, existingUser);
        }

        const user = await new User({
          provider: profile.provider,
          providerId: profile.id,
          name: profile.displayName,
          email: profile.email
        }).save();

        return done(null, profile);
      } catch (error) {
        console.log(chalk.red(error.message));
        res.send('server error');
      }
    }
  )
);
