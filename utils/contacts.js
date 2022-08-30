const { rejects } = require('assert');
const fs = require('fs');

const dirPath = "./data";
if (!fs.existsSync(dirPath)) {
  fs.mkdirSync(dirPath);

}
//membuat file contac .json
const dataPath = "./data/contacts.json"
if (!fs.existsSync(dataPath)) {
  fs.writeFileSync(dataPath, "[]", "utf-8");

}
//find kontak
const findkontak =(nama)=>{
    const contact1 = loadkontak();
  const contact = contact1.find((contact) => contact.nama.toLowerCase() === nama.toLowerCase())
  return contact

}



const loadkontak = () => {
  const fileBuffer = fs.readFileSync("data/contacts.json", 'utf-8');
  const contact1 = JSON.parse(fileBuffer);

  return contact1;
}

const saveKontak =(contacts)=>{
  fs.writeFileSync('data/contacts.json', JSON.stringify(contacts))
}

const addKontak = (contact)=>{

  const contacts = loadkontak();
  contacts.push(contact);
  saveKontak(contacts);
}
 
//cek nama yang duplikat
const cekDuplikat =(nama)=>{
    const contacts = loadkontak();
    return contacts.find((contact) =>contact.nama === nama
    )
}
//hapus kontak 
const deleteKontak= (nama)=>{
  const contacts = loadkontak();
  const fileredCon = contacts.filter((contact)=>
    contact.nama !== nama
   
  );
  saveKontak(fileredCon);




}

//mengubah kontak 

const updateKontak =(contactBaru)=>{
const contact = loadkontak();
//hilangkan kontak nama
const fileredCon = contact.filter((contact)=>contact.nama !== contactBaru.oldnama )
delete contactBaru.oldnama;
fileredCon.push(contactBaru);
saveKontak(fileredCon);
}




module.exports ={loadkontak , findkontak , addKontak , cekDuplikat , deleteKontak , updateKontak}