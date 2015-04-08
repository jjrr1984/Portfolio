var express = require('express');
var mongoose = require('mongoose');
var app = express();

//Connecting to the database
mongoose.connect(process.env.DBLOCATION || 'mongodb://localhost/portfolio');
var db = mongoose.connection;
db.on('error', function(){
	console.log("Database connection error");
});
db.once('open', function () {
	console.log("Database connection was succesful");
});

//	Static folders
app.use('/views',express.static('views'));
app.use('/img',express.static('img'));
app.use('/css',express.static('css'));
app.use('/angular',express.static('angular'));

require('./routes')(app);	//	Adding routes
var port = process.env.PORT || 8888;
app.listen(port);
console.log("Server running at port " + port);
