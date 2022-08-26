const fs = require('fs');
//menuliskan secara sycronus
//try{fs.writeFileSync('data/test.txt' , 'Hello Aliens secara syncronus')}

//catch(e){
    //console.log(e);

//}
//menuliskan file fs tapi asyncronus

//fs.writeFile('data/test1.txt' , 'Hello World secara asyncronus', (e)=>{
  //  console.log(e)
//})

//membaca isi file dengan syncronus
//const data =fs.readFileSync('data/test1.txt' , 'utf-8');
//console.log(data);

//fs.readFile('data/test.txt' , 'utf-8' , (err,data)=>{
//if(err)throw err;
//console.log(data);


//})

//ReadLine
const readline = require('readline');
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout,
})
rl.question('masukan nama anda?? ', (answer) => {
    // TODO: Log the answer in a database
    console.log(`Terima kasih ${answer}`);
  
    rl.close();
  });