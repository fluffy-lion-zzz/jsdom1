const letters = document.getElementsByTagName("li")
const notOrange = document.getElementsByClassName("not-orange")

// for(let i = 0; i < letters.length; i++){
//     letters[i].style.color = "orange"
// }

// for(let i = 0; i < notOrange.length; i++) {
//     notOrange[i].style.color = "red"
// }

// for(let i = 0; i < letters.length; i++){
//     if(letters[i].className == "not-orange"){
//         letters[i].style.color = "blue"
//     } else {
//         letters[i].style.color = "orange"
//     }
// }

for(let i = 0; i < letters.length; i++){
    if(letters[i].className != "not-orange"){
        letters[i].style.color = "orange"
    }
}
