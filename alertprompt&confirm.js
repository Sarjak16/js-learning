//simple program for alert prompt and confirm.


alert("enter value of a")
let a= prompt("enter a here","578")
let write =confirm("do you wnat to write it in doccument")
if(write){
document.write(a)
}
else{
  document.write("please allow me to write")
}
a= Number.parseInt(a)
//alert("type of a you entered is a "+ (typeof a))
