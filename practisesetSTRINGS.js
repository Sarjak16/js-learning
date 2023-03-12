//practise set strings


//problem 1

let str="har\""
console.log(str.length)

//problem2
const sentence = 'The quick brown fox jumps over the lazy dog.';

const word = 'fox';

console.log(`The word "${word}" ${sentence.includes(word) ? 'is' : 'is not'} in the sentence`);


//problem3
console.log(word.toUpperCase())

//problem4 print amount only.

let str2 = "please give Rs 1000"
let amount= Number.parseInt(str2.slice("please give Rs".length))
console.log(amount)

//problem 5

let friend="deepika"
friend[3]="r"
console.log(friend) //friend is not changed because string is immutable.
