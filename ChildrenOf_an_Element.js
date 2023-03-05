//finding first child element of a html body.
console.log(document.body.firstChild)
//lastchild
console.log(document.body.lastChild)
//childNodes
console.log(document.body.childNodes)

//converting childNodes into array
let arr= Array.from(document.body.childNodes)
console.log(arr)
