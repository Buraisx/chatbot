var express = require('express');
var app = express();

var http = require('http');
var server = http.Server(app);

var router = express.Router();

app.use(express.static('./'));

//bot functions
function isQuestion(msg) {
	return msg.match(/\?$/)
}

function isTime(msg){
	return msg.match(/time/)
}

//socketio 
var io = require('socket.io')(server);

io.on('connection', function (socket) {
  socket.on('message', function (msg) {
  	if (isQuestion(msg)) {
  		if (isTime(msg)) {
  		
  		}
    	io.emit('message', msg);
	}
  });
});


//start server
server.listen(8080, function() {
  console.log('Chat server running');
});