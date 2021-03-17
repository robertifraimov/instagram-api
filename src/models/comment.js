
const mongoose = require('mongoose');

const Commnet = mongoose.model('Commnet', {
	user: {
        type: mongoose.ObjectId,
        required: true,
        ref: 'User'
    },
 postId: {
    type: mongoose.ObjectId,
    required: true,
 },
 content: String,
	createdAt: {
		type: Date,
		required: true,
		default: () => new Date()
	}
});

module.exports = Commnet;
