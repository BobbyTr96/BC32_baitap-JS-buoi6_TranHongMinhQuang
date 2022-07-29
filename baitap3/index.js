function tinhGiaiThua() {
  /// đầu vào
  let num1 = document.getElementById("num1").value * 1;
  let X = 1;
  let n = 0 ;

//   for( let i = 1 ; i <= num1 ; i++) {
//     X *= i ;
   
//   }
while ( n < num1) {
    n++
    X *=n
    
}
console.log(n);
  document.getElementById("result").innerHTML = X ;
}
