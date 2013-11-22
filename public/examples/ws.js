var ws = new WebSocket("ws://localhost:8080");

ws.onopen = function() {
    ws.send("oslo");
};

ws.onmessage = function(e) {
    var rows = JSON.parse(e.data);
    console.log(rows);
};

