//finds if the persons age lies between 10 to 20.
//problem 1



let age = prompt("what is your age")
age = Number.parseInt(age)
if 
  (age>10 && age<20)
{console.log("your age lies between 10 and 20")
}
else {
console.log("your age doesnt lie between 10 and 20")
}



//problem 2
//demonstrare usage of switch case statement
let age = prompt ("what is your age")
switch (age) {
  case '12':
    console.log("your   age is 12")
    break
    case '13':
    console.log("your age is 13")
    
    case '14':
    console.log("your age is 14")
    break
    case '15':
    console.log("your age is 15")
    break
  default:
    console.log("your age is not special")
    
}



//problem 3



let num = prompt("what is your age")
num = Number.parseInt(num)
if(num%2==0 && num%3==0)
{
  console.log("your number is divisible by 2 and 3")
  
}
else {
  console.log("your number is not divisible by 2 or 3")
}



// problem 4
//use of ternary operator


let age= 19
let a= age>18?"you can drive" :"you cannot drive"
console.log(a)



  
