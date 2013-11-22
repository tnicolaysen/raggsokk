var http = require('http');
var ecstatic = require('ecstatic');
var WebSocketServer = require('ws').Server;
var placename = require('placename');

var server = http.createServer(
  ecstatic({ root: __dirname + '/public' })
).listen(8080);

var wss = new WebSocketServer({ server: server });

wss.on('connection', function(ws) {

    ws.on('message', function(message) {
        console.log('searching for: %s', message);

        placename(message, function (err, rows) {
            console.log('found %s matching cities', rows.length);
            ws.send(JSON.stringify(rows));
        });
    });

    ws.on('close', function() {
        console.log("i'm out, yo");
    });

});
