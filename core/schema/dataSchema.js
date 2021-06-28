const { Schema } = require('mongoose');

const dataSchema = new Schema({
    alert: {type: Number},
    clientId: {type: String},
    info: {type: String},
    lat: {type: Number},
    lng: {type: Number},
    timestamp: {type: Number},
    value: {type: Number},
})

module.exports = dataSchema