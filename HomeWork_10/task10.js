// ************** task 1 ************** //

const http = require('http');
const os = require('node:os');
const path = require('path');

const userNamme = os.userInfo().username;
const osType = os.type();
const workTime = Math.floor(os.uptime()/60);
const workDirectory = process.cwd();
const fullServerFilePath = __filename;
const serverFileName = path.basename(fullServerFilePath);

http.createServer((request, responce) => {
    responce.writeHead(200, "Content-Type: text/html");
    responce.write(`<h1>System information</h1>`);
    responce.write(`<p>Current user name: ${userNamme}</p>`);
    responce.write(`<p>OS Type: ${osType}</p>`);
    responce.write(`<p>Sysyem work time: ${workTime}</p>`);
    responce.write(`<p>Current work directory: ${workDirectory}</p>`);
    responce.write(`<p>erver file name: ${serverFileName}</p>`);
    responce.end();
}).listen(5000);

console.log('Server is listening at http://localhost:5000');  

// ************** task 2 ************** //