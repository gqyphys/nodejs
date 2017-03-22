var fs = require("fs");

// readStream
var data = "";

var readStream = fs.createReadStream("input.txt");
readStream.setEncoding("UTF8");

readStream.on("data", function(chunk) {
    data += chunk;
});

readStream.on("end", function() {
    console.log(data);
});

readStream.on("error", function() {
    console.log(err.stack);
});

console.log("程序执行完毕");

// writeStream
var data2 = "This is a output file.";

var writeStream = fs.createWriteStream("output.txt");

writeStream.write(data2,"UTF8");
writeStream.end();

writeStream.on("finish", function() {
    console.log("write finished");
});

writeStream.on("error", function() {
    console.log(err.stack);
});

console.log("congratrulations!");
