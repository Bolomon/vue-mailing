const { Schema, model } = require('mongoose');

const schema = new Schema({
	email: { type: String  },
	name: { type: String },
	surname: { type: String },
	text: { type: String },
});

module.exports = model('Message', schema);