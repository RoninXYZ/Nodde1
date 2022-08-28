const fs = require('fs');
const http = require('http');
const port = 3000;
http
    .createServer((req, res) => {
        res.writeHead(200,{'Content-Type':'text/html'})
        const url = req.url;
        if(url === '/about'){
            fs.readFile('about.html' , (err,data)=>{
                if(err){
                    res.writeHead(404);
                    res.write('Eror : file not found')
                }else{
                    res.write(data)
                }
                res.end();
               });
            // res.write('<h1>ini halaman About</h1>');
            // res.end();
        }
        else if(url === '/contac'){
            res.write('<h1>ini halaman contac</h1>');
            res.end();
        }else{
           fs.readFile('index.html' , (err,data)=>{
            if(err){
                res.writeHead(404);
                res.write('Eror : file not found')
            }else{
                res.write(data)
            }
            res.end();
           });
             
        }

        
       
        // res.write('Hello Aliens');
        // res.end();
    })
    .listen(port, () => {
        console.log(`listening in port ${port}`);
    })