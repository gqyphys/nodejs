var http = require('http');
var server = http.createServer();
var events = require('events');

server.on('request', function (req, res) {
    if(req.url!=='/favicon.ico'){
        console.log('接到客户端请求');
    }
    res.end();
});

server.on('request', function (req, res) {
    if(req.url!=='/favicon.ico'){
        console.log(req.url);
    }
    res.end();
});

server.on('request', function (req, res) {
    if(req.url!=='/favicon.ico'){
        console.log('发送响应完毕');
    }
    res.end();
});

server.listen(1337, "127.0.0.1");

console.log(events.EventEmitter.listenerCount(server, 'request'));
