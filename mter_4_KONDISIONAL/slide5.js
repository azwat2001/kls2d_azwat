const prompt = require("promt-sync")({ sigit: true });

let nim, nama, angka, huruf, comfirm = "";
while (comfirm !== "q") {
    nim = prompt("masukan nim :");
    nama = prompt("masukan nama : ");
    angka = prompt("masukan nilai angka : ");
    if (angka >= 80) {
        huruf = "A";
    }else if (angka >= 70){
        huruf = "B";
    }else if (angka >= 60){
        huruf = "C";
    }else if (angka >= 50){
        huruf = "D";
    }else{
        huruf = "E";
    }}
    console.log("nilai huruf : "+huruf);
    comfirm = prompt("tekan sembarang tombol untuk mengimput atau q untuk keluar : ");