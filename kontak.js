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
if (!fs.existsSync(dirPath)) {
  fs.mkdirSync(dirPath);

}
//membuat file contac .json
const dataPath = "./data/contacts.json"
if (!fs.existsSync(dataPath)) {
  fs.writeFileSync(dataPath, "[]", "utf-8");

}

// const tulis_pertanyaan = (pertanyaan)=>{
//   return new Promise((resolve , rejects)=>{
//     rl.question(pertanyaan, (nama) => {
//       resolve(nama);
//     });
//   });
// }

const loadkontak = () => {
  const fileBuffer = fs.readFileSync("data/contacts.json", 'utf-8');
  const contact1 = JSON.parse(fileBuffer);

  return contact1;
}


const simpankontak = (nama, email, NO_HP) => {
  const kontak = {
    nama,//:nama,
    email,
    NO_HP //: noHp ,

  }
  const contact1 = loadkontak();
  const duplikat = contact1.find((kontak) => kontak.nama === nama)
  if (duplikat) {
    console.log(chalk.red.inverse.bold('kontak sudah terdapter , gunakan nama lain'));
    return false;
  }

  if (email) {
    if (!validator.isEmail(email)) {
      console.log(chalk.red.inverse.bold('Email tidak valid'));
      return false;
    }

  }

  if (NO_HP) {
    if (!validator.isMobilePhone(NO_HP, 'id-ID')) {
      console.log(chalk.red.inverse.bold('Nomor hp tidak valid'));
      return false;
    }

  }




  contact1.push(kontak)
  fs.writeFileSync('data/contacts.json', JSON.stringify(contact1))

  console.log(chalk.green.inverse.bold("terimakasih"));


}

const listContact = () => {
  const contact1 = loadkontak();
  console.log(chalk.cyan.inverse.bold("Daptar kontak"));

  contact1.forEach((contact, i) => {
    console.log(`${i + 1}.${contact.nama} - ${contact.NO_HP}`)
  })
}

//menampilkan detail sebuah kontak
const detailcontak = (nama,) => {
  const contact1 = loadkontak();
  const contact = contact1.find((contact) => contact.nama.toLowerCase() === nama.toLowerCase())
  if (!contact) {
    console.log(chalk.green.inverse.bold(`${nama} tidak ditemukan`));
    return false;
  }
  console.log(chalk.cyan.inverse.bold(contact.nama));

  console.log(contact.NO_HP);
  if (contact.email) {
    console.log(contact.email);
  }
}


const deletecontak =(nama)=>{
  const contact1 = loadkontak();
  const newkontak = contact1.filter((contact)=>contact.nama.toLowerCase() !== nama.toLowerCase())
  if (contact1.length === newkontak.length) {
    console.log(chalk.green.inverse.bold(`${nama} tidak ditemukan`));
    return false;
  };
  fs.writeFileSync('data/contacts.json', JSON.stringify(newkontak))

  console.log(chalk.green.inverse.bold(`${nama} berhasil dihapus`));


};



module.exports = {
  simpankontak, listContact, detailcontak, deletecontak
}