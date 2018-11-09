var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var KeyboardCharacters = require('node-hid-stream').KeyboardCharacters;
var characters = new KeyboardCharacters({ vendorId: 0x0f39, productId: 0x0877 });

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  console.log('a client connected');

  characters.on("data", function(data) {
    socket.emit('data', data);
    console.log(data);
  });
});

http.listen(80, function(){
  console.log('listening on *:80');
});
