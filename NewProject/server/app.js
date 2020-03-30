const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const db = require('./config/db');
const rtsUser = require('./routes/router');
const empCnt = require('./controllers/empController')

var app = express();

app.use(bodyParser.json());
app.use(cors());
app.use('/signIn', rtsUser);
app.use('/emp',empCnt);


const PORT = 3000;

app.listen(PORT, () => console.log(`Server is started at ${PORT} ` ));

db.authenticate().then(() => {
    console.log("Database connected successfully");
  }).catch((err) => {
    console.log(err);
  });