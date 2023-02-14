let marks={
  harry: 90,
   subham:99,
   monika: 4,
  hero: 9
}
//problem 1:
for(let i=0;i<Object.keys(marks).length;i++){
  console.log("the marks of" + Object.keys(marks)[i] + " are"+ marks[Object.keys(marks)[i]])
}

//problem 2:
for(let key in marks){
  

console.log("the marks of" + key + " are"+ marks[key])//prints same output as problem 1
}

//problem 4
let cn= 4
let i
while(i != cn){
  console.log("try again")
  i = prompt("enter a number")
   console.log("try again")
}
console.log("you have entered a correct number" )

//problem 4
const mean =(a,b,c,d)=>{
  return(a+b+c+d)/4
  
}
console.log(mean (4,5,6,7))
