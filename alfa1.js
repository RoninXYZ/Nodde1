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


module.exports.CetakNama = CetakNama;
module.exports.PI = PI;