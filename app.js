const http = require('http');


const server = http.createServer((req, res) => {
    console.log('Harshul Rai')
    res.writeHead(200);
    res.end("Harshul Rai");
});

server.listen(4000);