const {Schema} = require('mongoose');

const userSchema = new Schema({	
	name: {type: String, unique: true},
	password: {type: String},
	email: {type: String, unique: true},
	phone: {type: String, unique: true},

	devices: [{type: String}]	// 用户订阅的设备列表
});


module.exports = userSchema;
