'use strict';

var express = require('express');

var app = express();

var port = process.env.PORT || 5000;

app.get('/', function(req, res) {
	// request headers
	var headers = req.headers;

	var language = headers['accept-language'].substr(0, 5);

	// match only what is inside (); returns array
	var software = headers['user-agent'].match(/\(.*\)/g)[0];
	// match only what is not '(' or ')'
	software = software.match(/[^\(].*[^\)]/g)[0];

	var result = {
		ipaddress: req.ip,
		language: language,
		software: software
	};

	res.send(JSON.stringify(result));
});

app.listen(port, function() {
  console.log('Node app is running on port ', port);
});

// app.listen(3000, function() {
// 	console.log('Listening on port 3000');
// });