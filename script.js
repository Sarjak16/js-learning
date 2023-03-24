let first = document.getElementById("first");

let a = first.getAttribute("class")
console.log(a)
console.log(first.hasAttribute("class"))
console.log(first.hasAttribute("style"))
//first.setAttribute("hidden", "true")
first.setAttribute("class", "true truth")
//first.removeAttribute("class") removes class 
console.log(first.attributes)//Nodemap