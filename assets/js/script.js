document.addEventListener("DOMContentLoaded", function() {

// function for first set of radio buttons : day/night
let firstToggle = document.getElementById("toggleDayNight")
firstToggle.addEventListener('click', dayNight);

function dayNight(event){
    let day = document.getElementById("day");
    let neutral = document.getElementById("day-night");
    let night = document.getElementById("night");

    if (day.checked) {
        document.getElementById("defaultImage").src='assets/images/images-artwork/day.jpg';
    } else if (night.checked){
        document.getElementById("defaultImage").src='assets/images/images-artwork/night.jpg';
    } else if (neutral.checked){
        document.getElementById("defaultImage").src='assets/images/images-artwork/emptyspace.png';
    } else {
    
    }
}

// function for second set of radio buttons : calm/chaos
let secondToggle = document.getElementById("toggleCalmChaos")
secondToggle.addEventListener('click', calmChaos);

function calmChaos(event){
    let calm = document.getElementById("calm");
    let neutral2 = document.getElementById("calm-chaos");
    let chaos = document.getElementById("chaos");

    let testDelete = document.getElementById("calmChaosOverlay");
    testDelete.innerHTML = "";

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
    } else {
        // alert("Hey! You got it right! :D");
    }
}

// function for third set of radio buttons : nature/civilisation
let thirdToggle = document.getElementById("toggleNatureCivilisation")
thirdToggle.addEventListener('click', natureCivilisation);

function natureCivilisation(event){
    let nature = document.getElementById("nature");
    let neutral3 = document.getElementById("nature-civilisation");
    let civilisation = document.getElementById("civilisation");

    let testDelete = document.getElementById("natureCivilisationOverlay");
    testDelete.innerHTML = "";

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
    } else {
        // alert("Hey! You got it right! :D");
    }
}

// Tallying the results to see if the universe is doomed.
let submit = document.getElementById('submit-button');
submit.addEventListener('click', finalTally);

document.getElementById("submit-button'").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        finalTally();
    };
});

function finalTally(event){
    let night = document.getElementById("night");
    let chaos = document.getElementById("chaos");
    let nature = document.getElementById("nature");
    
    if (night.checked & chaos.checked & nature.checked){
        alert("Congratulations, you wiped out humanity!");
    } else {
        alert("well y'all did somthing...");
    }
    
};

let resetButton = document.getElementById('reset-button');
resetButton.addEventListener('click', "resetGame");

function resetGame(event){
    // let ndDelete = document.getElementById("defaultImage");
    // ndDelete.innerHTML = "";
    // let ccDelete = document.getElementById("calmChaosOverlay");
    // ccDelete.innerHTML = "";
    // let ncDelete = document.getElementById("natureCivilisationOverlay");
    // ncDelete.innerHTML = "";
    alert("well y'all did somthing...");
};

});
