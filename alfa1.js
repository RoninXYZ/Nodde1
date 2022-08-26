//console.log("Hello Aliens");

function CetakNama(nama){
    return `Hello ,Nama Saya ${nama}`;

}

const PI = 3.14;


const mahasiswa = {
    nama : "Dody Ferdiansyah ",
    no : 494,
    cetakMhs(){
        return `Hello , Nama saya ${this.nama} dan saya no ${this.no}`
    }
}

class Orang {
    constructor(){
        console.log("object orang telah dibuat");
    }
}


//module.exports.CetakNama = CetakNama;
//module.exports.PI = PI;
//module.exports.mahasiswa = mahasiswa;
//module.exports.Orang = Orang;

//module.exports = {
//    CetakNama : CetakNama,
//    PI : PI,
//    mahasiswa : mahasiswa,
 //   Orang :Orang


//}
module.exports = {CetakNama, PI , mahasiswa , Orang}