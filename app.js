const express = require('express');

const datasRouter = require('./routes/datas');
const usersRouter = require('./routes/users');
const devicesRouter = require('./routes/devices');

const app = express();

app.use(express.json({limit: '100mb'}));

app.use('/users', usersRouter);
app.use('/datas', datasRouter);
app.use('/devices', devicesRouter);

module.exports = app;
