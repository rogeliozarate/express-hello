var express = require('express');
var app = express();

app.get('/', function(req,res){
  var body = '<!DOCTYPE html><html><head><title>Hello world node-express</title></head><body><h1>Hello world!</h1></body>'
  res.setHeader('Content-Type','text/html');
  res.setHeader('Content-Length', body.length);
  res.end(body);
 }
);

app.use(function(err, req, res, next){
  console.error(err.stack);
  res.send(500, 'Houston, We have a problem!');
  res.render('error', { error: err });
  }
);

app.listen(3000);
console.log('Listening on port 3000');