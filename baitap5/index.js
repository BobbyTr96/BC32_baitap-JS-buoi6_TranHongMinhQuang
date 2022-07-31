function inSo() {
    // đầu vào
  var num = document.getElementById("num").value * 1;
  

  // xử lý
  function kiemTraSnt(n){
    //flag = 0 => không phải số nguyên tố
    //flag = 1 => số nguyên tố
   
    let flag = 1;

    if (n <2) return flag = 0; /*Số nhỏ hơn 2 không phải số nguyên tố => trả về 0*/
     // số nguyên tố phải lớn hơn 1
    /*Sử dụng vòng lặp while để kiểm tra có tồn tại ước số nào khác không*/
    // let i = 2; 
    // while(i <n){
    //     if( n%i==0 ) {
    //         flag = 0;
    //         break; /*Chỉ cần tìm thấy  ước số thỏa mãn đk thì kết thúc vòng lặp và trả ra kết quả flag = 0 = ko phải số nguyên tố*/
    //     }
    //     i++;
    // }
    // đặt dk a < n Và a = 2 :vì số nguyên số là những số chỉ chia hết cho 1 và cho chính bản thân nó ngoài ra nó ko thể chia hết cho bất kì số nào khác , ở đây nếu để a <= n thì là nó tự chia cho chính nó ở vòng lặp thứ 2 nên ko thể cho ra kết quả dúng đc 
    for( let a = 2 ; a < n ; a++) {
        if ( n % a === 0 ){
            flag = 0
            break ;
        }
    }

    return flag;
}


/*Tìm và liệt kê các số nguyên tố */
for (let i = 0; i <= num; i++){
    if (kiemTraSnt(i) === 1)  console.log(i );
  }
}
