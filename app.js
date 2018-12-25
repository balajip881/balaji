var express = require ( 'express');
var app = express () ;

var i;
app.post ('/:a/:b/*', function(req,res){
		res.send (req.params.a+1111111111111);
	});

	app.get ('/:a/:b/*', function(req,res){
		res.send (req.params.b+1111111111111);
	});

	app.listen(3000);
