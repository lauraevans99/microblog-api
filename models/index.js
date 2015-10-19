var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/microblog_app");

module.exports.Post = require("./post.js");