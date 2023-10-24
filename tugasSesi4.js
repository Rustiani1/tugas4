var penjualan = 600000; //sesuaikan dengan jumlah penjualan
var jasa = 0;
var komisi = 0;

// menghitung komisi dr jumlah penjualan
if (penjualan <= 200000) {
  jasa = 10000;
  komisi = penjualan * 0.1;
} else if (penjualan > 200000 && penjualan <= 500000){
  jasa = 20000;
  komisi = penjualan * 0.15;
} else if (penjualan > 500000){
  jasa = 30000;
  komisi = penjualan * 0.20;
}
// total pendapatan sales
var totalPendapatan = jasa + komisi;

console.log("Jumlah Penjualan : Rp. " + penjualan);
console.log("Uang Jasa : Rp. " + jasa);
console.log("Uang Komisi : Rp. " + komisi);
console.log("Total Pendapatan : Rp. " + totalPendapatan);