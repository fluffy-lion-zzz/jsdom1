// selecting the elements
let myHeading = document.getElementById("heading")
let myInput = document.getElementById("input")
let myButton = document.getElementById("button")

// adding an event listener to myButton element
myButton.addEventListener("click", () => {
    // assigning the color of myHeading to a new value
    // new value will be the value of the myInput element
    myHeading.style.color = myInput.value
})

