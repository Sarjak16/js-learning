//Array methods

let num =[1, 2, 3, 34, 4]
let b= num.toString()
console.log(b)
//join method
let c= num.join("and")
console.log(c, typeof c)
//pop method
let r=num.pop()
  console.log(num, r)
//push method
let q=num.push()
  console.log(num, q)

//shift method
let t= num.shift()
console.log(t, num)//removes element from start of the array


let r= num.unshift(78)// run this method separately for output
console.log(r, num) 

//delete operator

 let num = [1, 2, 3, 4, 5, 6, 7, 8, 9]

delete num[0]
console.log(num)//deletes element of 0 position
console.log(num.length)//doesnot change in length even after deleting


concat: merges array
let num_more = [11, 12, 13, 14, 15, 16, 17, 18, 19]
let num_even_more = [211, 212, 213, 214, 215, 216, 217, 218, 219]

let newArray = num.concat(num_more, num_even_more)
console.log(newArray)
console.log(num, num_more)

//Sorting method
let compare =(a, b)=>{
  return b - a
}
let numA = [51, 62, 33, 74, 85, 96, 07, 48, 29]
//numA.sort()
numA.sort(compare)//sorts usinh compare function ascending or descending
console.log(numA)//sorts on basis the starting number 

// splice and slice
let numB = [51, 62, 33, 74, 85, 96, 07, 48, 29]
numB.splice(2,3,1021,1022,1023)
console.log(numB)//returns deleted items and modifies source array


//slice
let newNum=numB.slice
console.log(newNum)
