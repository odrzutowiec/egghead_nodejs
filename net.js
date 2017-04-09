var net = require('net');
var server = net.createServer(function(c){
  console.log('clinet connected');
  c.on('data', function(d){
    console.log('received: ' + d.toString());
  });
  c.on('end', function(){
    console.log('disconected');
  });
});

server.listen(3000, function(){
  console.log('server started');
});
