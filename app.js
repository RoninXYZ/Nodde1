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



// const pertanyaan2 = ()=>{
//   return new Promise((resolve , reject)=>{
//     rl.question('masukan email anda?? ', (email) => {
//       resolve(email);
//     });
//   });
// }

const main =async ()=>{
  const nama = await tulis_pertanyaan('masukan nama anda ?');
  const email = await tulis_pertanyaan('masukan email anda ?');
  const NO_HP = await tulis_pertanyaan('masukan NO_HP anda ?')
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