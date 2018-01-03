var cheerio = require('cheerio');
var server = require("./curl");
// var iconv = require('iconv-lite');

var url = 'http://news.163.com/';

server.download(url, function(data) {
    if (data) {
        console.log(data);

        var $ = cheerio.load(data);
        $("a").each(function(i, e) {
            console.log($(e).attr("href"));
        });

        console.log("done");
    } else {
        console.log("error");
    }
});
