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

// function for first set of radio buttons : day/night
let firstToggle = document.getElementById("toggleDayNight")
firstToggle.addEventListener('click', dayNight);

function dayNight(event){
    // let day = document.getElementById("day");
    // let neutral = document.getElementById("day-night");
    // let night = document.getElementById("night");

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
    // let calm = document.getElementById("calm");
    // let neutral2 = document.getElementById("calm-chaos");
    // let chaos = document.getElementById("chaos");

    let cleanSlate = document.getElementById("calmChaosOverlay");
    cleanSlate.innerHTML = "";

    let img = document.createElement('img');
    img.id = "calmChaosImage";
    img.alt = "Calm or Chaos";
    document.getElementById("calmChaosOverlay").appendChild(img);


    if (calm.checked) {
        document.getElementById("calmChaosImage").src='assets/images/images-artwork/calm.png';
    } else if (chaos.checked){
        document.getElementById("calmChaosImage").src='assets/images/images-artwork/chaos.png';
    } else if (neutral2.checked){
        document.getElementById("calmChaosImage").src='assets/images/images-artwork/defaultimage.png';
    } 
}

// function for third set of radio buttons : nature/civilisation
let thirdToggle = document.getElementById("toggleNatureCivilisation")
thirdToggle.addEventListener('click', natureCivilisation);

function natureCivilisation(event){
    // let nature = document.getElementById("nature");
    // let neutral3 = document.getElementById("nature-civilisation");
    // let civilisation = document.getElementById("civilisation");

    let cleanSlate = document.getElementById("natureCivilisationOverlay");
    cleanSlate.innerHTML = "";

    let img = document.createElement('img');
    img.alt = "Nature or Civilisation";
    img.id = "natureCivilisationImage";
    document.getElementById("natureCivilisationOverlay").appendChild(img);

    if (nature.checked) {
        document.getElementById("natureCivilisationImage").src='assets/images/images-artwork/nature.png';
    } else if (civilisation.checked){
        document.getElementById("natureCivilisationImage").src='assets/images/images-artwork/civilisation.png';
    } else if (neutral3.checked){
        document.getElementById("natureCivilisationImage").src='assets/images/images-artwork/emptyspace.png';
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
    // let night = document.getElementById("night");
    // let chaos = document.getElementById("chaos");
    // let nature = document.getElementById("nature");

    // win/lose screen variables
    let loseMessage = document.getElementById("lose-message");
    
    if (night.checked & chaos.checked & nature.checked){
        alert("Congratulations, you wiped out humanity!");
        loseMessage.style.display = "none";
    } else {
        // alert("nu uh. Wrong combo. Try again.");
        loseMessage.style.display = "block";
        console.log(loseMessage)
        alert("nope. try again");
    } 
}

let resetButton = document.getElementById('reset-button');
resetButton.addEventListener('click', resetGame);

function resetGame(event){
    neutral.checked = true;
    neutral2.checked = true;
    neutral3.checked = true;

    document.getElementById("defaultImage").src='assets/images/images-artwork/defaultimage.png';

    let cleanSlate = document.getElementById("calmChaosOverlay");
    cleanSlate.innerHTML = "";

    let img = document.createElement('img');
    img.id = "calmChaosImage";
    img.alt = "Calm or Chaos";
    document.getElementById("calmChaosOverlay").appendChild(img);
    document.getElementById("calmChaosImage").src='assets/images/images-artwork/emptyspace.png';

    let cleanSlateTwo = document.getElementById("natureCivilisationOverlay");
    cleanSlateTwo.innerHTML = "";

    let imgTwo = document.createElement('img');
    imgTwo.alt = "Nature or Civilisation";
    imgTwo.id = "natureCivilisationImage";
    document.getElementById("natureCivilisationOverlay").appendChild(img);
    document.getElementById("natureCivilisationImage").src='assets/images/images-artwork/emptyspace.png';

    loseMessage.style.display = "none";
}

});

