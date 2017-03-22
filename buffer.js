var buff1 = new Buffer("www.");
var buff2 = new Buffer("kaoshixing.com");
var buff3 = Buffer.concat([buff1,buff2]);


console.log("write:" + buff3);
