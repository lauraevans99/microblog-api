
// REQUIREMENTS //
var express = require("express");
var bodyParser = require("body-parser");

var app = express();

// ROUTES //
app.get("/", function(req, res){
	res.send("Working!");
});





app.listen(3000, function() {
	console.log('Ready');
});