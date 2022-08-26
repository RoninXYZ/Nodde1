const fs = require('fs');
//menuliskan secara sycronus
//try{fs.writeFileSync('data/test.txt' , 'Hello Aliens secara syncronus')}

//catch(e){
    //console.log(e);

//}
//menuliskan file fs tapi asyncronus

fs.writeFile('data/test1.txt' , 'Hello World secara asyncronus', (e)=>{
    console.log(e)
})