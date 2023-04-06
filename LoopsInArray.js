//classical for loop

 let num= [3, 54, 1, 2, 4]
 for(let i=0; i<num.length;i++){
 console.log(num[i])
 }


//forEach loop
num.forEach((element)=>{
  console.log(element * element)
})

//Array.from

let name ="sarjak"
let arr= Array.from(name) //converts given value of variable into array
console.log(arr)

// for of
for (let i of num){
  console.log(num)
}
