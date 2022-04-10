document.addEventListener("DOMContentLoaded", function() {

})


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
        alert("Hey! You got it right! :D");
    }
}

// function for second set of radio buttons : calm/chaos
let secondToggle = document.getElementById("toggleCalmChaos")
secondToggle.addEventListener('click', calmChaos);

function calmChaos(event){
    let calm = document.getElementById("calm");
    let neutral2 = document.getElementById("calm-chaos");
    let chaos = document.getElementById("chaos");
    let img = document.createElement('img');
    // img.src = 'assets/images/images-artwork/calm.png';
    // img.alt = "A calm planet earth";
    img.id = "calmChaosImage";
    document.getElementById("calmChaosOverlay").appendChild(img);

    if (calm.checked) {
        document.getElementById("calmChaosImage").src='assets/images/images-artwork/calm.png';
    } else if (chaos.checked){
        document.getElementById("calmChaosImage").src='assets/images/images-artwork/chaos.png';
    } else if (neutral2.checked){
        document.getElementById("calmChaosImage").src='assets/images/images-artwork/emptyspace.png';
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
    let img = document.createElement('img');
    // img.src = 'assets/images/images-artwork/calm.png';
    // img.alt = "A calm planet earth";
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




// let thirdToggle = document.getElementById("toggleNatureCivilisation")
// thirdToggle.addEventListener('click', natureCivilisation);

// function natureCivilisation(event){
//     let nature = document.getElementById("nature");
//     let neutral3 = document.getElementById("nature-civilisation");
//     let civilisation = document.getElementById("civilisation");
//     let img = document.createElement('img');
//     img.id = "natureCivilisationImage";
//     document.getElementById("natureCivilisationOverlay").appendChild(img);

//     if (nature.checked) {
//         document.getElementById("natureCivilisationOverlay").src='assets/images/images-artwork/nature.png';
//         // alert("test");
//     } else if (civilisation.checked){
//         document.getElementById("natureCivilisationOverlay").src='assets/images/images-artwork/civilisation.png';
//         // alert("test");
//     } else if (neutral3.checked){
//         document.getElementById("natureCivilisationOverlay").src='assets/images/images-artwork/emptyspace.png';
//         // alert("test");
//     } else {
        
//     }
// }


