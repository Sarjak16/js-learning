// simple program on function.

function onePlusAvg(x,y) {
  console.log("done")
  return (x+y)/2
}



let a=1;
let b=2;
let c=3;

console.log("sum of a and b is",onePlusAvg(a,b))
console.log("sum of b and c is",onePlusAvg(b,c))
console.log("sum of a and c is",onePlusAvg(a,c))

//Arrow function
const hello=() => {
  console.log("hello i am sarjak.")
  return "hi"
}

let v=hello();
console.log(v)
