const express = require('express');
const passport = require('passport');
const chalk = require('chalk');
const connectDB = require('./config/db');

connectDB();
require('./services/passport');
const app = express();
app.use(express.json({ extended: false }));

app.use(passport.initialize());
app.use(passport.session());

app.get('/', (req, res) => {
  res.send('home');
});
app.use('/auth', require('./routes/auth'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(chalk.green('listening'));
});
