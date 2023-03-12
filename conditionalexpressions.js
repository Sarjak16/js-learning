//write a program that says only above 18 can drive.
let a=prompt("hey whats your age")
a= Number.parseInt(a) //converting the string to a number
if(a<0){
  alert("this is an invalid age")
}
  else if(a<9){
    alert("you are kid dont think of driving")
  }
  else if(a<18&&a>=9){
    alert("you are kid you can think of driving after 18")
  }
else{
  alert("it is valid age if you arre above 18 ");
}

console.log("you can", (a<18? "not drive":" drive"))
            
