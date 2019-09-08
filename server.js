const express = require('express');
const passport = require('passport');
const chalk = require('chalk');
const connectDB = require('./config/db');

const app = express();
connectDB();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(chalk.green('listening'));
})