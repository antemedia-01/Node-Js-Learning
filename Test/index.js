let http = require('http');
let time = require('./myModule');
http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('the date and time is currently:' + time.setTime());
    res.end();
}).listen(8080);
// console.log(time.setTime());