const express = require('express');
const passport = require('passport');
const chalk = require('chalk');
const connectDB = require('./config/db');
const cookieSession = require('cookie-session');
const keys = require('./config/keys');

const PORT = process.env.PORT || 5000;

connectDB();
require('./services/passport');
const app = express();
app.use(express.json({ extended: false }));

app.use(
  cookieSession({
    maxAge: 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.get('/', (req, res) => {
  res.send('home');
});
app.use('/auth', require('./routes/auth'));

app.listen(PORT, () => {
  console.log(chalk.green('listening'));
});
