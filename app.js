const express = require('express')
const app = express()
const port = 3000
const {loadkontak}=require('./utils/contacts')
const  expressLayouts = require('express-ejs-layouts');
app.set('view engine' ,'ejs');
app.use(expressLayouts)


app.use(express.static('public'));



 



app.get('/', (req, res) => {
    //res.sendFile('./index.html', { root: __dirname }) 
    const mahasiswa = [
        {
            nama:"Sandika galih",
            email :"sandikagalih@gmail.com"
        },
        {
            nama:"Erik",
            email :"Erik@gmail.com"
        },
        {
            nama:"Dody",
            email :"Dody@gmail.com"
        }
    ]
    res.render('index' ,{
        nama : "Sandika Galih",
        title :"Halaman Home" ,
        mahasiswa:mahasiswa,
        layout:'layout/main_layout',
    })
})

app.get('/about', (req, res ,) => {
    //res.sendFile('./about.html', { root: __dirname })
    res.render('about' , {layout:'layout/main_layout',title :"Halaman about" ,});
    
})
app.get('/kontak', (req, res) => {

    const contacts = loadkontak();
   
    //res.send('ini halaman kontak')
    //res.sendFile('./contac.html', { root: __dirname })
    res.render('contac' , {layout:'layout/main_layout',title :"Halaman kontak" ,
    contacts:contacts,
})
})



app.use('/', (req, res) => {
    res.status(404);
    res.send('<h1>404</h1>');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})







