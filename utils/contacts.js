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



const loadkontak = () => {
  const fileBuffer = fs.readFileSync("data/contacts.json", 'utf-8');
  const contact1 = JSON.parse(fileBuffer);

  return contact1;
}

module.exports ={loadkontak}