const yargs = require("yargs");
const contacs = require("./kontak");


yargs.command({
    command:'add',
    describe:'menambahkan kontak baru',
    builder: {
        nama : {
            describe: 'nama lengkap',
            demandOption: true,
            type: 'string'
        },
        email: {
            describe: 'Email',
            demandOption: false,
            type: 'string'

        },
        noHP:{
            describe: 'NO Handphone',
            demandOption: false,
            type: 'string'
        } 
    },
    handler(argv){
        contacs.simpankontak(argv.nama,argv.email,argv.noHP)
    }
}).demandCommand();

yargs.command({
    command:'list',
    describe:'menampilkan semua nama dan no hp',
    handler(){
       contacs.listContact();
    }
})

//menampilkan detail sebuah kontak

yargs.command({
    command:'detail',
    describe:'menampilkan detail nama dan no hp berdasarkan nama',
    builder: {
        nama : {
            describe: 'nama lengkap',
            demandOption: true,
            type: 'string'
        },
        
    },
    
    handler(argv){
       contacs.detailcontak(argv.nama);
    }
})

yargs.command({
    command:'delete',
    describe:'menghapus kontak berdasarkan nama',
    builder: {
        nama : {
            describe: 'nama lengkap',
            demandOption: true,
            type: 'string'
        },
        
    },
    
    handler(argv){
       contacs.deletecontak(argv.nama);
    }
})












yargs.parse();


// const command = process.argv[2];

// if(command==='add'){

// }else if(command==='remove'){

// }else if(command === 'list'){

// }

// //console.log(process.argv);
































// const contacts = require('./kontak')

// const pertanyaan2 = ()=>{
//   return new Promise((resolve , reject)=>{
//     rl.question('masukan email anda?? ', (email) => {
//       resolve(email);
//     });
//   });
// }

// const main =async ()=>{
//   const nama = await contacts.tulis_pertanyaan('masukan nama anda ?');
//   const email = await contacts.tulis_pertanyaan('masukan email anda ?');
//   const NO_HP = await contacts.tulis_pertanyaan('masukan NO_HP anda ?')
//   contacts.simpankontak(nama,email,NO_HP)
//  }
// main();





// //rl.question('masukan nama anda?? ', (nama) => {
//     // TODO: Log the answer in a database
// //    rl.question('masukan nomor hp anda??' ,(noHp)=>{
//  //     console.log(`Terimakasih ${nama} no hp anda ${noHp}`)
//       const kontak = {
//         nama ,//:nama,
//         noHp //: noHp 
//       }
//      const fileBuffer =  fs.readFileSync("data/contacts.json" , 'utf-8');
//      const contact1 = JSON.parse(fileBuffer);
//     contact1.push(kontak)
//     fs.writeFileSync('data/contacts.json' , JSON.stringify(contact1) ) 

//      console.log("terimakasih")

//       rl.close();
//     })

   
//   });