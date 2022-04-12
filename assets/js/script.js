document.addEventListener("DOMContentLoaded", function() {

// targetting radio buttons to call within the functions.
let day = document.getElementById("day");
let neutral = document.getElementById("day-night");
let night = document.getElementById("night");
let calm = document.getElementById("calm");
let neutral2 = document.getElementById("calm-chaos");
let chaos = document.getElementById("chaos");
let nature = document.getElementById("nature");
let neutral3 = document.getElementById("nature-civilisation");
let civilisation = document.getElementById("civilisation");

// win/lose screen variables
let winMessage = document.getElementById("win-message");
let loseMessage = document.getElementById("lose-message");

// function for first set of radio buttons : day/night
let firstToggle = document.getElementById("toggleDayNight")
firstToggle.addEventListener('click', dayNight);

function dayNight(event){
    if (day.checked) {
        document.getElementById("defaultImage").src='assets/images/images-artwork/day.jpg';
    } else if (night.checked){
        document.getElementById("defaultImage").src='assets/images/images-artwork/night.jpg';
    } else if (neutral.checked){
        document.getElementById("defaultImage").src='assets/images/images-artwork/defaultimage.png';
    } 
}

// function for second set of radio buttons : calm/chaos
let secondToggle = document.getElementById("toggleCalmChaos")
secondToggle.addEventListener('click', calmChaos);

function calmChaos(event){
    if (calm.checked) {
        document.getElementById("firstOverlay").src='assets/images/images-artwork/calm.png';
    } else if (chaos.checked){
        document.getElementById("firstOverlay").src='assets/images/images-artwork/chaos.png';
    } else if (neutral2.checked){
        document.getElementById("firstOverlay").src='assets/images/images-artwork/defaultimage.png';
    } 
}

// function for third set of radio buttons : nature/civilisation
let thirdToggle = document.getElementById("toggleNatureCivilisation")
thirdToggle.addEventListener('click', natureCivilisation);

function natureCivilisation(event){
    if (nature.checked) {
        document.getElementById("secondOverlay").src='assets/images/images-artwork/nature.png';
    } else if (civilisation.checked){
        document.getElementById("secondOverlay").src='assets/images/images-artwork/civilisation.png';
    } else if (neutral3.checked){
        document.getElementById("secondOverlay").src='assets/images/images-artwork/emptyspace.png';
    } 
}

// Tallying the results to see if the universe is doomed.
let submit = document.getElementById('submit-button');
submit.addEventListener('click', finalTally);

addEventListener("keydown", function(event) {
    if (event.key === "enter") {
        submit.addEventListener('click', finalTally());
    }
})

function finalTally(event){
    if (night.checked & chaos.checked & nature.checked){
        // alert("Congratulations, you wiped out humanity!");
        winMessage.style.display = "block";

        let winGraphic = document.getElementById("game-area");
        winGraphic.style.backgroundImage = "url('assets/images/images-artwork/winscreen.png')"
        winGraphic.style.backgroundPosition = '100%';

    } else {
        loseMessage.style.display = "block";
    } 
}

let resetButton = document.getElementById('reset-button');
resetButton.addEventListener('click', resetGame);

function resetGame(event){
    neutral.checked = true;
    neutral2.checked = true;
    neutral3.checked = true;

    document.getElementById("defaultImage").src='assets/images/images-artwork/defaultimage.png';
    document.getElementById("firstOverlay").src='assets/images/images-artwork/defaultimage.png';
    document.getElementById("secondOverlay").src='assets/images/images-artwork/emptyspace.png';

    winMessage.style.display = "none";
    loseMessage.style.display = "none";
}

});

