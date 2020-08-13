const express = require('express');
const chalk = require('chalk');

const router = express.Router();

router.get('/', (req, res) => {
  res.render('register');
});

router.post('/', (req, res) => {
  const { username, password } = req.body;
  const { length } = password;
  const start = Date.now();
  const testPattern = new RegExp(username, 'i');
  const isValid = !testPattern.test(password);
  const time = Date.now() - start;

  console.log(`${chalk.greenBright(`[Length: ${length}]`)} ${time} ms`);

  if (isValid) {
    return res.send('Thanks for creating an account!');
  }

  return res.render('register', {
    error: "Your password shouldn't contain your username!",
  });
});

module.exports = router;
