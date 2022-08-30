const express = require('express')
const app = express()
const port = 3000
const {loadkontak , findkontak ,addKontak , cekDuplikat ,deleteKontak ,updateKontak}=require('./utils/contacts')
const { body, validationResult  , check} = require('express-validator');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const flash = require('connect-flash');


const  expressLayouts = require('express-ejs-layouts');
app.set('view engine' ,'ejs');
app.use(expressLayouts);
app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));

app.use(cookieParser('secret'));
app.use(session({
cookie:{maxAge:6000},
secret:'secret',
resave : true, 
saveUninitialized:true,


}));

app.use(flash());
//konfigurasi

 



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
    contacts:contacts,msg:req.flash('msg')
})
})
//halaman form
app.get('/kontak/add' ,(req,res)=>{
    res.render('add-kontak' , {
        title:"form tambah data kontak",
        layout:'layout/main_layout',

    })
})
//proses data kontak

app.post('/kontak', [
body ('nama').custom((value)=>{
const duplikat = cekDuplikat(value);
if(duplikat){
    throw new Error('nama kontak sudah ada')
}
return true;

}),
check('email', 'email tidak valid').isEmail(),
check('nohp' ,'no hp tidak valid' ).isMobilePhone('id-ID')

], (req,res)=>{
   const errors = validationResult(req);
//    addKontak(req.body);
//    res.redirect('/kontak')
if (!errors.isEmpty()) {
    //return res.status(400).json({ errors: errors.array() });
   res.render('add-kontak' ,{
    title:"form tambah data kontak",
    layout:'layout/main_layout',
    errors:errors.array(),

   })  
}else{
  addKontak(req.body);
  req.flash('msg', 'data kontak good job')
  res.redirect('/kontak')
//kirim

}
 }


)
//proses delet contact
app.get('/kontak/delete/:nama', (req,res)=>{
    const contact = findkontak(req.params.nama);
    if(!contact){
        res.status(404);
        res.send('<h1>404</h1>');
    }else{
        deleteKontak(req.params.nama);
        req.flash('msg', 'data kontak good job')
        res.redirect('/kontak')
    }

})

//form ubah data kontak
app.get('/kontak/edit/:nama' ,(req,res)=>{

    const contact = findkontak(req.params.nama);

    res.render('edit-kontak' , {
        title:"form ubah data kontak",
        layout:'layout/main_layout',
        contact:contact ,
    })
})

//proses ubah data

app.post('/kontak/update', [
    body ('nama').custom((value ,{req})=>{
    const duplikat = cekDuplikat(value);
    if(value !== req.body.oldnama && duplikat){
        throw new Error('nama kontak sudah ada')
    }
    return true;
    
    }),
    check('email', 'email tidak valid').isEmail(),
    check('nohp' ,'no hp tidak valid' ).isMobilePhone('id-ID')
    
    ], (req,res)=>{
       const errors = validationResult(req);
    //    addKontak(req.body);
    //    res.redirect('/kontak')
    if (!errors.isEmpty()) {
        //return res.status(400).json({ errors: errors.array() });
       res.render('edit-kontak' ,{
        title:"form Ubah data kontak",
        layout:'layout/main_layout',
        errors:errors.array(),
        contact:req.body,
    
       })  
    }else{
        
      updateKontak(req.body);
       req.flash('msg', 'ubah data kontak good job')
       res.redirect('/kontak')
    //kirim
    
    }
     }
    
    
    )




//halaman detail kontak
app.get('/kontak/:nama', (req, res) => {

    const contact = findkontak(req.params.nama);
   
    //res.send('ini halaman kontak')
    //res.sendFile('./contac.html', { root: __dirname })
    res.render('detail' , {layout:'layout/main_layout',title :"Halaman detail kontak" ,
    contact,
})
})


app.use('/', (req, res) => {
    res.status(404);
    res.send('<h1>404</h1>');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})







