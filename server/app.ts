var express = require('express');
var app = express();
var cors = require('cors');

require('dotenv').config();

var corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/driver/', require('./src/routes/driver'));
app.use('/racetrack/', require('./src/routes/racetrack'));
app.use('/team/', require('./src/routes/team'));

app.listen(process.env.PORT);
