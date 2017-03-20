var fs = require("fs");


fs.readFile("input.txt", function (err, data) {
    if(err) return console.error(err);
    console.log(data.toString());
});

console.log("程序执行结束！");

var events = require("events");
var eventEmitter = new events.EventEmitter();

var connectHandler = function connectd() {
    console.log("connect success!");
    eventEmitter.emit("data_received");
}

eventEmitter.on("connection", connectHandler);

eventEmitter.on("data_received", function () {
    console.log("data received success!");
});

eventEmitter.emit("connection");

console.log("程序执行完毕。");
