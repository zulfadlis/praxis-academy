let siswa = [80, 77, 88, 95, 68];
let total = 0;
for (let i in siswa) {
  total += siswa[i];
}

let jumlah = siswa.length;
let avg = total / jumlah;

console.log(avg);

if (avg <= 60) {
  console.log("F");
} else if (avg <= 70) {
  console.log("D");
} else if (avg <= 80) {
  console.log("C");
} else if (avg <= 90) {
  console.log("B");
} else if (avg <= 100) {
  console.log("A");
} else {
  console.log("tidak dapat ditemukan");
}
