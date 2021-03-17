
const mongoose = require('mongoose');

const User = mongoose.model('User', {
	username: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true
	},
	bio: String,
	avatar: String,
	followers: [mongoose.ObjectId],
	createdAt: {
		type: Date,
		required: true,
		default: () => new Date()
	}
});

module.exports = User;
