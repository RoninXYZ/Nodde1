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

const pertanyaan1 = ()=>{
  return new Promise((resolve , rejects)=>{
    rl.question('masukan nama anda?? ', (nama) => {
      resolve(nama);
    });
  });
}



const pertanyaan2 = ()=>{
  return new Promise((resolve , reject)=>{
    rl.question('masukan email anda?? ', (email) => {
      resolve(email);
    });
  });
}

const main =async ()=>{
  const nama = await pertanyaan1();
  const email = await pertanyaan2();
  const kontak = {
            nama ,//:nama,
            email //: noHp 
          }
         const fileBuffer =  fs.readFileSync("data/contacts.json" , 'utf-8');
         const contact1 = JSON.parse(fileBuffer);
        contact1.push(kontak)
        fs.writeFileSync('data/contacts.json' , JSON.stringify(contact1) ) 
    
         console.log("terimakasih")
    
          rl.close();
 }
main();





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