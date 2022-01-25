const heading = document.getElementById("placeholder")
const input = document.getElementById("input")
const submit = document.getElementById("submit")
// const list = document.querySelectorAll("li");
let list = document.getElementsByTagName("ul")[0];

submit.addEventListener("click",() => {
    const item = document.createElement("li")
    item.textContent = input.value
    list.appendChild(item)
    input.value = ""
})