const http = require('http');
const port = 3000;
http
    .createServer((req, res) => {
        res.writeHead(200,{'Content-Type':'text/html'})
        const url = req.url;
        if(url === '/about'){
            res.write('<h1>ini halaman About</h1>');
            res.end();
        }
        else if(url === '/contac'){
            res.write('<h1>ini halaman contac</h1>');
            res.end();
        }else{
            res.write('<h1>Hello Aliens</h1>');
            res.end(); 
        }

        
       
        // res.write('Hello Aliens');
        // res.end();
    })
    .listen(port, () => {
        console.log(`listening in port ${port}`);
    })