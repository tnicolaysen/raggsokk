var http = require('http');
var ecstatic = require('ecstatic');
var WebSocketServer = require('ws').Server;

var server = http.createServer(
  ecstatic({ root: __dirname + '/public' })
).listen(8080);

var wss = new WebSocketServer({ server: server });

wss.on('connection', function(ws) {

    ws.on('message', function(message) {
        console.log('received: %s', message);
    });

    setInterval(function() {
        ws.send(JSON.stringify({ val: Math.random() }));
    }, 100);

});