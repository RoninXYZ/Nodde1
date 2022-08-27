const contacts = require('./kontak')

// const pertanyaan2 = ()=>{
//   return new Promise((resolve , reject)=>{
//     rl.question('masukan email anda?? ', (email) => {
//       resolve(email);
//     });
//   });
// }

const main =async ()=>{
  const nama = await contacts.tulis_pertanyaan('masukan nama anda ?');
  const email = await contacts.tulis_pertanyaan('masukan email anda ?');
  const NO_HP = await contacts.tulis_pertanyaan('masukan NO_HP anda ?')
  contacts.simpankontak(nama,email,NO_HP)
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