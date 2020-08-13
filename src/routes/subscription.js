const express = require('express');
const chalk = require('chalk');

const validator = require('../lib/validator');

const router = express.Router();

router.get('/', (req, res) => {
  res.render('subscribe');
});

router.post('/', (req, res) => {
  const { email } = req.body;
  const { length } = email;
  const start = Date.now();
  const isValid = validator.isEmailValid(email);
  const time = Date.now() - start;

  console.log(`${chalk.greenBright(`[Length: ${length}]`)} ${time} ms`);

  if (isValid) {
    return res.send('You are now subscribed!');
  }

  return res.render('subscribe', {
    error: 'The email is not valid.',
  });
});

module.exports = router;
