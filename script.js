document.getElementsByClassName("container")[0]

//this is given priority then written in html part.
a.onclick = () => {
  let b = document.getElementsByClassName("container")[0]
  b.innerHTML = "Hello World!"
}