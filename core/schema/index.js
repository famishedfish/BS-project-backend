const mongoose = require('mongoose')
const userSchema = require('./userSchema');
const deviceSchema = require('./deviceSchema');
const dataSchema = require('./dataSchema');

exports.userModel = mongoose.model('user', userSchema);
exports.deviceModel = mongoose.model('device', deviceSchema);
exports.dataModel = mongoose.model('data', dataSchema);
