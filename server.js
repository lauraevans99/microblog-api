
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

// A route to read all blog posts
app.get("/api/posts", function(req, res){
	res.sendStatus(200);
});

// A route to read one blog post
app.get("/api/posts/:id", function(req, res){
	res.sendStatus(200);
});

// A route to create a new blog post
app.post("/api/posts", function(req, res){
	res.sendStatus(200);
});

// A route to update a single blog post
app.put("/api/posts/:id", function(req, res){
	res.sendStatus(200);
});

// A route to delete a single blog post
app.delete("/api/posts/:id", function(req, res){
	res.sendStatus(200);
});





app.listen(3000, function() {
	console.log('Ready');
});