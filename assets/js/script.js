document.addEventListener("DOMContentLoaded", function() {

})

// Images to be loaded upon button clicks
let graphicArray = new Array();

graphicArray[0] = new Image();
graphicArray[0].src = '../images/images-artwork/day.jpg';

graphicArray[1] = new Image();
graphicArray[1].src = '../images/images-artwork/night.jpg';

let myButton = document.getElementById("toggleDayNight")
myButton.addEventListener('click', dayNight);


function dayNight(event){
    let day = document.getElementById("day");
    let neutral = document.getElementById("day-night");
    let night = document.getElementById("night");

    if (day.checked) {
        document.getElementById("defaultImage").src='assets/images/images-artwork/day.jpg';
    } else if (night.checked){
        document.getElementById("defaultImage").src='assets/images/images-artwork/night.jpg';
    } else {
        document.getElementById("defaultImage").src='assets/images/images-artwork/defaultimage.jpg';
        // alert("Hey! You got it right! :D");
    }
}


