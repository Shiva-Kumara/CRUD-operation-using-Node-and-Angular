const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');

const db = require('./db');
var empController = require('./controllers/empController');

var app = express();
app.use(bodyParser.json());
app.use(cors({ origin: 'http://localhost:4200' }));

app.listen(3000, () => console.log('Server is started at port 3000'));

db.authenticate().then(() => {
    console.log("Success!");
  }).catch((err) => {
    console.log(err);
  });

app.use('/emp', empController);