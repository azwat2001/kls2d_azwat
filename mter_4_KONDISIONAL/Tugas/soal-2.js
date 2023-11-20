let tinggi = 1.61;
let berat = 50;

let bmi = (berat)/(tinggi * tinggi);
if(bmi < 18.5){
    console.log("nilai bmi anda :"+bmi);
    console.log("kategori bmi : anda terlalu kurus");
}
else if (bmi >=18.5 && bmi <=25){
    console.log("nilai bmi anda : "+bmi);
    console.log("nilai bmi :anda langsing/sehat");  
}
else if (bmi >25){
    console.log("nilai bmi anda : "+bmi);
    console.log("nilai bmi : anda gemuk");
}