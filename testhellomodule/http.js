var http = require('http');

var server = http.createServer(function(request, response){
  if (request.url == '/') {
    response.end('Hello World!');
  } 
  else {
    response.end('url:' + request.url);
  }
});
server.listen(3000);
