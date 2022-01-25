const listItems = document.querySelectorAll("li")

const colours = [
    "red", 
    "yellow", 
    "goldenrod", 
    "lightgreen", 
    "blue", 
    "purple"
]

let x = 0
for(let i = 0; i < listItems.length; i++){
    listItems[i].style.color = colours[x]
    x++
    if (x == colours.length){
        x = 0
    }
}
