var buff1 = new Buffer("www.");
var buff2 = new Buffer("kaoshixing.");
var buff3 = new Buffer("com");
var buff4 = Buffer.concat([buff1,buff2,buff3]);


console.log("write:" + buff4);
