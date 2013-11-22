var ws = new WebSocket("ws://localhost:8080");
var bus = new Bacon.Bus();

ws.onopen = function() {
    ws.send("oslo");
};

ws.onmessage = function(e) {
    var rows = JSON.parse(e.data);
    bus.push(rows);
};

