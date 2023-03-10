// 1.take input age from user and say if they can drive or not. Ask user to enter their page color and change background as per users choice.


let runAgain= true;
const canDrive= (age)=>  {
  return age>=18 ?true : false
}

while (runAgain){
let age= prompt("enter your age")
age= Number.parseInt(age)
  if (age< 0){
    alert("invalid age");
    break;
  }
if (canDrive(age)){
alert("yes you can drive")
}
else{
  alert(" you cannot drive")
}
  runAgain = confirm("do you want to play again?")
}

let color =prompt("enter the page background color")
document.body.style.background = color
