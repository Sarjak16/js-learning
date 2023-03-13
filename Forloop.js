//program to add first n natural numbers


let sum=0;
let n= prompt("enter the value of n")
n= Number.parseInt(n)
for(let i=0; i<n;i++)
  {
   sum +=(i+1)
  }
console.log("sum of first"+ n +"natural number is"+ sum)


// for in loop
let obj ={
  ram: 90,
  hari: 45,
  sita: 56,
  gauri: 23
   
}
for (let a in obj){
  console.log("marks of " +a+ "are"+ obj[a])
}

// for of loop
for(let b of "handsome")
  {
    console.log(b)
    
  }
