//contoh 5 branching dengan kondisi
var minimarketStatus = "open"
var minuteRemainingToOpen = 10
if ( minimarketStatus == "tutup" ) {
    console.log("saya akan membeli telur dan buah")
} else if ( minuteRemainingToOpen <= 10 ) {
    console.log("saya berbelanja di minimarket")
} else {
    console.log("minimarket clos")
}
