const http = require('http');
const os = require('node:os');
const userNamme = os.userInfo().username;
const {sayHi} = require('./personalmodule.js');
const now = new Date();
const date = now;

http.createServer((request, responce) => {
    responce.writeHead(200, "Content-Type: text/plain");
    responce.write(`${sayHi(userNamme,date)}`);
    responce.end();
}).listen(3000);

console.log('Server is listening at http://localhost:3000');  