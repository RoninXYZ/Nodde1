const fs = require('fs');
//menuliskan secara sycronus
try{fs.writeFileSync('data/test.txt' , 'Hello Aliens secara syncronus')}

catch(e){
    console.log(e);

}