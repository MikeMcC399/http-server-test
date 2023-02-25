// Modified example from https://nodejs.org/en/docs/guides/getting-started-guide/

// Check listeners ...
//
// on Ubuntu with
// netstat -lnt | grep 3000
//
// on Windows with
// netstat -an | grep LISTENING | grep 3000

const http = require('http');

const hostname = '::';
const literalHostname = '[::1]'
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<body>Hello Cypress!</body>');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${literalHostname}:${port}/`);
});
