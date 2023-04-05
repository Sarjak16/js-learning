document.write("hello")

const sum =(a,b,c) =>{
  console.log("yes i am running"+(a+b+c))
a+b+c}


setTimeout(sum,100,1,2,7)


// let a = setTimeout(function() {
//   alert("I am inside set timeout")
// }, 5000)
// let b = prompt("do you want to run set timeout??")
// if ("no" == b) {
//   clearTimeout(a)
// }
