var theThem = "";
function taoThe() {
  var divs = document.getElementsByTagName("div");
console.log(divs);
 
  for (let i = 0; i <= divs.length; i++) {
    if (i%2 === 0) {
      
      divs[i].style.backgroundColor = "red"
     divs[i].innerHTML =  divs[i].innerHTML + "thẻ chẵn " + i
     
    } else {
      
      divs[i].style.backgroundColor = "blue"
      divs[i].innerHTML =  divs[i].innerHTML + "thẻ lẻ " + i
    }
  }
  
}
