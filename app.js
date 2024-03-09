let countEl = document.getElementById("count-el")
let count = 0
let saveEl = document.getElementById("save-el")
let welcomeEl = document.getElementById("welcomeEl")

let name_ = "Name"
let greet = " Welcome back!!!!"

welcomeEl.innerText = name_ + greet

function increment () {
  count += 1
  countEl.textContent = count
}

function save() {
  let message = count + " - "
  saveEl.textContent += message
  count = 0
  countEl.textContent = count
}

