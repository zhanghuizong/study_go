const WebSocket = require('ws');

var wsClient = {};
for (var i = 1; i <= 10000; i++) {
    const ws = new WebSocket('ws://127.0.0.1:8080/ws');
    wsClient[i] = ws;



    wsClient[i].on('message', function incoming(data) {
        console.log(data);
    });
}


for (var idx in wsClient) {
    let ws = wsClient[idx];

    (function (ws, idx) {
        ws.on('open', function open() {
            for (var i = 1; i <= 100000; i++) {
                ws.send(idx + "-------------" + i + '____something');
            }
        });
    })(ws, idx);
}