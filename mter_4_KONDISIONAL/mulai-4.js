//contoh 6
var minimarketStatus = "open"
var telur = "soldout"
var buah = "soldout" 
if ( minimarketStatus == "open" ) {
    console.log("saya berbelanjan di minimarket")
    if(telur == "soldout" || buah == "soldout" ) {
        console.log("belanjaan saya sangat banyak")    
    } else if( telur == "soldout") {
        console.log("telur habis")
    } else if ( buah == "soldout" ) {
        console.log("buah habis")
    }
} else {
    console.log("minimarket tutup, saya pulang lagi")
}
