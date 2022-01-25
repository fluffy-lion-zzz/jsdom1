//selecting an element by its ID
const myHeading = document.getElementById("heading")

// adding an event listener to the element we just selected
// when the element has been clicked, it will run its function
myHeading.addEventListener("click", () => {
    myHeading.style.color = "orange"
})

