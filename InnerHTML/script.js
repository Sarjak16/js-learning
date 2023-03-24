
let x = document.getElementsByTagName('span')[0]
console.log(x)
let y = document.getElementsByTagName('span')[0]
console.dir(y)
console.log(document.body.firstChild.nodeName)
console.log(document.body.firstElementChild.nodeName)

//inner html valid for elementnodes only
first.innerHTML
first.innerHTML = "<i>hey i am italic tag</i>"

//outerhtml
first.outerHTML
first.outerHTML "<div>Hey i am div1</div>"
//text content
console.log(document.bdy.firstChild.data)
console.log(document.body.textContent)

