const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const indexRouter = require('./routes/index');
const subscriptionRouter = require('./routes/subscription');
const registerationRouter = require('./routes/registeration');

const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', indexRouter);
app.use('/subscribe', subscriptionRouter);
app.use('/register', registerationRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
