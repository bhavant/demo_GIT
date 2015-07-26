var express = require("express");
var morgan = require("morgan");
var parser = require("body-parser");

var app = express();

var port = 3001;

app.get("*", function(req, res) {
	res.status(200).send("Hello World");
});

var hello = "Hello World";

app.listen(port, function(err) {
	if (err)
		console.log(err);
	else
		console.log("Listening at Port " + port)
	
});
