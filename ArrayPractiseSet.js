// arrays practise set


//problem 1 "create an arrray of numbers and take input from users and add the number to array"
let arr =[1, 2, 3, 4, 5, 6, 7, 83]
let a= prompt("enter a number")
a =Number.parseInt(a)
arr.push(a)
console.log(arr)

//problem2 "keep adding numbers to the array in Q1 until 0 is addd to array

let arr =[1, 2, 3, 4, 5, 6, 7, 83]
let a;
do {
 a = prompt("enter a number")

 a =Number.parseInt(a)
arr.push(a)
}while (a != 0);
console.log(arr)

//problem3 "filter for numbers divisible by 10 from given array"


let arr =[1, 20, 30, 4, 5, 60, 7, 83]
let n= arr.filter((x)=>{
  return x%10 ==0
  
})
console.log(n)

//problem 4 "create an array of square of given numbers"

let arr =[1, 20, 30, 4, 5, 60, 7, 83]
let n= arr.map((x)=>{
  return x*x
  
})
console.log(n)

