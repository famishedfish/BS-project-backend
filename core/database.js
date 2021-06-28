const mongoose = require('mongoose');
const db = require('./schema');

mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.connect('mongodb://localhost/eIoT', {useNewUrlParser: true, useUnifiedTopology: true});
const conn = mongoose.connection;
conn.on('error', console.error.bind(console, 'connection error'));
conn.once('open', () => {
  console.log("connected");
});

module.exports = db;


