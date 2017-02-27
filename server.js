var express = require('express');
var app = express();
var PORT = 3000;

var middleware = {
	requireAuthentication: function(req, res, next){
		console.log('Hit the middleware !');
		next();
	},
	logger:function(req, res, next){
		var time = new Date().toString();
		console.log('Request : ' + req.method + ' ' + req.originalUrl + ' TIME : ' + time);
		next();
	}
};

app.use(middleware.logger);

app.use(express.static(__dirname + '/public'));

app.listen(PORT, function(){
	console.log('SERVER STARTED ! OPEN WITH PORT : ' + PORT );
});