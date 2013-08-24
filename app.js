var express = require('express');
var app = express();

app.get('/', function(req,res){
  var body = 'Hello world'
  res.setHeader('Content-Type','text/plain');
  res.setHeader('Content-Length', body.length);
  res.end(body);
 }
);

app.use(function(err, req, res, next){
  console.error(err.stack);
  res.send(500, 'Houston, We have a problem!');
  }
);

app.listen(3000);
console.log('Listening on port 3000');