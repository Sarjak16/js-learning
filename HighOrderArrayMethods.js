//array mapping

let arr=[45, 23, 21]
let a = arr.map((value, index, array)=>{
  console.log(value,index, array)
  return value+index
})
  
console.log(a)

//array filter

let arr2 =[0,4,50,33]
let a2=arr2.filter((a)=>{
  return a<10
})
console.log(a2)

//Array reduce

let arr3=[2, 4, 56, 66, 69]
letnewarr3=arr3.reduce((h1, h2)=>{
  return h1+h2
  console.log(newarr3)
})
