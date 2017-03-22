var buffer = new Buffer(14);

var len = buffer.write("www.kaoshixing.com");

console.log("write length:" + len);

console.log(buffer.toString('ascii'));
console.log(buffer.toString('ascii',0,3));
console.log(buffer.toString('utf8',0,4));
console.log(buffer.toString(undefined,0,5));
