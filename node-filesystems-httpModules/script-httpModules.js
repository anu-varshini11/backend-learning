const http = require('http');

const server = http.createServer((req,res) => {
    res.end("Hello from the server side!");
})

server.listen(3000);