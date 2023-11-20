var tahunKelahiran = 2001; 
    if (tahunKelahiran >= 1946 && tahunKelahiran <= 1964) {
        console.log("Baby Boomer");
    } else if (tahunKelahiran >= 1965 && tahunKelahiran <= 1980) {
        console.log("Genarasi X");
    } else if (tahunKelahiran >= 1981 && tahunKelahiran <= 1996) {
        console.log("Generasi Y (Millennials)");
    } else if (tahunKelahiran >= 1997 && tahunKelahiran <= 2012) {
        console.log("Generasi Z");
    } else if (tahunKelahiran >= 2013) {
        console.log("Generasi Alpha");
    } else {
        console.log("Tahun kelahiran tidak valid.");
    }