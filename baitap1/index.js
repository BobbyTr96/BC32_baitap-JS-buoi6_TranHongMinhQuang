function tim(){
let n = 0 ;
let sum = 0 ;
while (sum < 10000)//điều kiện là tổng số nguyên dương phải lớn hơn 10.000
 {
    n++ // số nguyên dương nhỏ nhất khi mà tổng 1 -  n của nó > 10.000
    sum += n
}
document.getElementById("result").innerHTML = "Số nguyên dương nhỏ nhất mà tổng của nó > 10.000 là : " + n ;
}