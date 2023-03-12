console.log("enter s to choose snake, g to choose gun and w to choose water.")

let user = prompt("enter s, w or g")
let cpuI = math.floor(math.random() * 3);
let cpu = ["s", "w", "g"][cpuI]

const match = (cpu, user) => {
  if (cpu === user) {
    return "nobody. match is tied......"
  }
  else if (cpu === "s" && user === "w") {
    return "cpu wins"
  }
  else if (cpu === "s" && user === "g") {
    return "user wins"
  }
  else if (cpu === "g" && user === "w") {
    return "user wins"
  }
  else if (cpu === "g" && user === "s") {
    return "cpu wins"
  }
  else if (cpu === "w" && user === "s") {
    return "user wins"
  }
  else if (cpu === "w" && user === "g") {
    return "cpu wins"
  }

  let result = match(cpu, user)
  document.write(`cpu: ${cpu}\n user: ${user}\n the winnwr is: ${result}`)
