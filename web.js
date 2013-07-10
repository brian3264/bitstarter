var express = require('express');
var fs = require('fs');
var app = express.createServer(express.logger());
var buf = fs.readFileSync('index.html','utf-8');
var string = buf.toString();
app.get('/', function(request, response) {
  response.send(string);
});
