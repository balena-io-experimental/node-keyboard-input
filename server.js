const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const KeyboardCharacters = require('node-hid-stream').KeyboardCharacters;
const vendorId = parseInt(process.env.VENDOR_ID || '0f39', 16);
const productId = parseInt(process.env.PRODUCT_ID || '0877', 16);

const characters = new KeyboardCharacters({ vendorId, productId });

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
