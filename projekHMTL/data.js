const nama = "syahrizal"
let usia = 55
const hobi = "futsal"

let biodata = document.getElementById(`biodata`)
console.log(biodata)
function bioData(){
    let generasi
    if(usia > 12 && usia < 20) {
         generasi =`anda remaja`
     }
       else if (usia > 21 && usia < 30) {
            generasi=`anda sudah dewasa`
       }
        else if (usia  > 31 && usia < 40) {
            generasi=`anda orang mars`
        }
        else if(usia > 1 && usia < 12){
            generasi=`anda anak kecil`
       } else if(usia > 40 &&  usia < 60){
            generasi=`anda nenek`
       } else if(usia > 60 && usia <100){
            generasi=`udah jompo lu`
       }
        else {
            generasi=`anda bukan manusia`
    }
     return biodata.innerHTML=generasi
}
    console.log(`nama saya adalah ${nama} usia saya ${usia} tahun hobi saya ${hobi}`)

console.log(nama)
console.log(usia)
console.log(hobi)

bioData()
