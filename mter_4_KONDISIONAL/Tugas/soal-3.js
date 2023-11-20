var nilaiDeo = 100;
if (nilaiDeo >= 80 && nilaiDeo <=100){
    console.log("nilai deo adalah :"+nilaiDeo+",dengan indeks prestasi= A");
}
else if (nilaiDeo >= 70 && nilaiDeo < 80){
    console.log("nilai deo adalah :"+nilaiDeo+",dengan indeks prestasi= B");
}
else if (nilaiDeo >= 60 && nilaiDeo < 70){
    console.log("nilai deo adalah :"+nilaiDeo+",dengan indeks prestasi= C");
}
else if (nilaiDeo >= 50 && nilaiDeo < 60){
    console.log("nilai deo adalah :"+nilaiDeo+",dengan indeks prestasi= D");
}
else if (nilaiDeo < 50){
    console.log("nilai deo adalah :"+nilaiDeo+",dengan indeks prestasi= E");
}
else {
    console.log("nilai melebihi batas");
}