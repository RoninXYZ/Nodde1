const { rejects } = require('assert');
const fs = require('fs');
const { resolve } = require('path');
const readline = require('readline');
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout,
})
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

const tulis_pertanyaan = (pertanyaan)=>{
  return new Promise((resolve , rejects)=>{
    rl.question(pertanyaan, (nama) => {
      resolve(nama);
    });
  });
}

const simpankontak =(nama,email,NO_HP)=>{
    const kontak = {
        nama ,//:nama,
        email,
        NO_HP //: noHp ,

      }
     const fileBuffer =  fs.readFileSync("data/contacts.json" , 'utf-8');
     const contact1 = JSON.parse(fileBuffer);
    contact1.push(kontak)
    fs.writeFileSync('data/contacts.json' , JSON.stringify(contact1) ) 

     console.log("terimakasih")

      rl.close();  
}

module.exports ={
    tulis_pertanyaan,simpankontak
}