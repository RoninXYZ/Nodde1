const fs = require('fs');
const readline = require('readline');
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout,
})
rl.question('masukan nama anda?? ', (nama) => {
    // TODO: Log the answer in a database
    rl.question('masukan nomor hp anda??' ,(noHp)=>{
      console.log(`Terimakasih ${nama} no hp anda ${noHp}`)
      const kontak = {
        nama ,//:nama,
        noHp //: noHp 
      }
     const fileBuffer =  fs.readFileSync('./data/contact.json' , 'utf-8');
     const contact1 = JSON.parse(fileBuffer);
    contact1.push(kontak)
    fs.writeFileSync('contact.json' , JSON.stringify(contact1) ) 

     console.log("terimakasih")

      rl.close();
    })

   
  });