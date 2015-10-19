var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var PostSchema = new Schema({
	content: {
		type: String,
		require: true
	}
});

var Post = mongoose.model('Post', PostSchema);
module.exports = Post;