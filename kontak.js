const { rejects } = require('assert');
const fs = require('fs');
const chalk = require('chalk')
const validator = require('validator')
// const { resolve } = require('path');
// const readline = require('readline');
// const rl = readline.createInterface({
//     input:process.stdin,
//     output:process.stdout,
// })
//membuat folder data
const dirPath = "./data";
if(!fs.existsSync(dirPath)){
  fs.mkdirSync(dirPath);

}
//membuat file contac .json
const dataPath = "./data/contacts.json"
if(!fs.existsSync(dataPath)){
  fs.writeFileSync(dataPath,"[]" , "utf-8");

}

// const tulis_pertanyaan = (pertanyaan)=>{
//   return new Promise((resolve , rejects)=>{
//     rl.question(pertanyaan, (nama) => {
//       resolve(nama);
//     });
//   });
// }

const simpankontak =(nama,email,NO_HP)=>{
    const kontak = {
        nama ,//:nama,
        email,
        NO_HP //: noHp ,

      }
     const fileBuffer =  fs.readFileSync("data/contacts.json" , 'utf-8');
     const contact1 = JSON.parse(fileBuffer);
    const duplikat = contact1.find((kontak) => kontak.nama === nama)
if(duplikat){
  console.log(chalk.red.inverse.bold('kontak sudah terdapter , gunakan nama lain'));
  return false;
}

if(email){
  if(!validator.isEmail(email)){
    console.log(chalk.red.inverse.bold('Email tidak valid'));
    return false;
  }

}

if(NO_HP){
  if(!validator.isMobilePhone(NO_HP, 'id-ID')){
    console.log(chalk.red.inverse.bold('Nomor hp tidak valid'));
    return false;
  }

}




    contact1.push(kontak)
    fs.writeFileSync('data/contacts.json' , JSON.stringify(contact1) ) 

     console.log(chalk.green.inverse.bold("terimakasih"));

       
}

module.exports ={
    simpankontak
}