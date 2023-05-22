var https = require('http');


https.createServer(function(req, res){
    res.write("hello world form the Shrey Gajjar op port 5000");
    res.end();
}).listen(5000);