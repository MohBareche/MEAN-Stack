const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;
const morgan = require('morgan');
const mongoose = require('mongoose');

app.use(morgan('dev'));

mongoose.connect('mongodb://localhost:27017/tutorial', {
  useNewUrlParser: true
}, (err) => {
  if (err) {
    console.log('Not connected to the database:' + err);
  } else {
    console.log('Successfully connected to MongoDB');
  }
});

app.get('/home', (req, res) => {
  res.send('Hello from home');
});

app.listen(PORT, () => {
  console.log('Running the server on port ' + PORT + '...');
});
