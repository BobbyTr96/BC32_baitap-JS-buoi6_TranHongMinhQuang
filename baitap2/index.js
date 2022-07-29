function tinhTong() {
  let num1 = document.getElementById("num1").value * 1;
  let num2 = document.getElementById("num2").value * 1;
  let S = 0;
  let n = 0 ;
//   while (n <= num2) {
//     n++
//     S += Math.pow(num1,n)
    
//   }

for ( let i = 1 ; i <= num2 ; i++) {
    S += Math.pow(num1,i)
}
  document.getElementById("result").innerHTML = S ;

}
