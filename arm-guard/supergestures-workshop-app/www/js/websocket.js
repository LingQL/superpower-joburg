var socketConnected = false;
var host = "http://192.168.1.103:5000/";
var socket;

function connectSocket(){
    console.log("connect socket!");
    socket = io.connect(host);
    //connect to host ip portal
    socket.on('connect', function() {
      socketConnected = true;
      document.getElementById("socketStatus").innerHTML = "<b>WebSocket</b><br>Status: Connected to server";
      
      //send message back to server app
      var message = device.name + " connected";
      socket.emit('chat message', message );

      socket.on('disconnect',function(){
        socketConnected = false;
        document.getElementById("socketStatus").innerHTML = "<b>WebSocket</b><br>Status: Lost connection with server";
      });
    });
}

function sendSocket(msg){
  socket.on('connect', function() {
    if (socketConnected == true){
      socket.emit('chat message', msg );
    }
  });
}