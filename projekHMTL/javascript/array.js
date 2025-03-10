function jumlahPositif(arr) {
    return arr.reduce((total, num) => {
        return num > 0 ? total + num : total;
    }, 0);
}

// Contoh penggunaan
const angka = [1, -4, 7, 12];
const hasil = jumlahPositif(angka);
console.log(hasil); // Output: 20