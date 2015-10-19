
// REQUIREMENTS //
var express = require("express");
var bodyParser = require("body-parser");

var app = express();

// CONFIG //
app.set('view engine', 'ejs');
app.use("/static", express.static("public"));
//express.static: app.use(express.static('public'));

// ROUTES //
app.get("/", function(req, res){
	//res.send("Working!");
	res.render('index.ejs');
});





app.listen(3000, function() {
	console.log('Ready');
});