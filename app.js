const fs = require('fs');
const http = require('http');
const port = 3000;

const RenderHtml = (path, res) => {
    fs.readFile(path, (err, data) => {
        if (err) {
            res.writeHead(404);
            res.write('Eror : file not found')
        } else {
            res.write(data)
        }
        res.end();
    });
}




http
    .createServer((req, res) => {
        res.writeHead(200, { 'Content-Type': 'text/html' })
        const url = req.url;
        switch (url) {
            case '/about':
                RenderHtml('about.html', res);
                break;
            case '/contac':
                RenderHtml('contac.html', res);
                break;
            default:
                RenderHtml('index.html' , res);
                break;
        }








        // if(url === '/about'){
        //     RenderHtml('about.html' , res);
        //     // fs.readFile('about.html' , (err,data)=>{
        //     //     if(err){
        //     //         res.writeHead(404);
        //     //         res.write('Eror : file not found')
        //     //     }else{
        //     //         res.write(data)
        //     //     }
        //     //     res.end();
        //     //    });
        //     // res.write('<h1>ini halaman About</h1>');
        //     // res.end();
        // }
        // else if(url === '/contac'){
        //     RenderHtml('contac.html' , res)
        // }else{

        // RenderHtml('index.html' , res);


        // //    fs.readFile('index.html' , (err,data)=>{
        // //     if(err){
        // //         res.writeHead(404);
        // //         res.write('Eror : file not found')
        // //     }else{
        // //         res.write(data)
        // //     }
        // //     res.end();
        // //    });

        // }



        // res.write('Hello Aliens');
        // res.end();
    })
    .listen(port, () => {
        console.log(`listening in port ${port}`);
    })