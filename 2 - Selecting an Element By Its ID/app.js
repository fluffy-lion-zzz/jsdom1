let myHeading = document.getElementById("heading")
let myInput = document.getElementById("input")
let myButton = document.getElementById("button")

myButton.addEventListener("click", () => {
    myHeading.style.color = myInput.value
})
