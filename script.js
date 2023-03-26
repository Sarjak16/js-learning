//old method
let a = document.getElementsByTagName('div')[0]
a.innerHTML = a.innerHTML + '<h1>HELLO WORLD</h1>';

let div =document.createElement('div');
div.innerHTML = '<h1>I am created with js using create element</h1>';
a.appendChild(div);
 