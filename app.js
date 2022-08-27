const http = require('http');
const port = 3000;
http
    .createServer((req, res) => {
        const url = req.url;
        console.log(url);
        res.writeHead(200,{'Content-Type':'text/html'})
        res.write('Hello Aliens');
        res.end();
    })
    .listen(port, () => {
        console.log(`listening in port ${port}`);
    })