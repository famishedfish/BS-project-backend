const {Schema} = require('mongoose');

const deviceSchema = new Schema({	
	clientId: {type: String, unique: true},
	timestamp: {type: Number},	// time of add
	deviceType: {type: String, enum: [0, 1, 2, 3, 4, 5], default: 5},
	deviceName: {type: String},
});


module.exports = deviceSchema;
