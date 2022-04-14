document.addEventListener("DOMContentLoaded", function() {

// Load & unload the instrucions panel
let gameArea = document.getElementById("game-area");
let instructionsPanel = document.getElementById("instructions-panel");

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

// targetting toggle containers
let sliderOne = document.getElementById("slider-one");
let sliderTwo = document.getElementById("slider-two");
let sliderThree = document.getElementById("slider-three");

// win/lose screen variables
let winMessage = document.getElementById("win-message");
let loseMessage = document.getElementById("lose-message");

// EVENT LISTENERS:
// 'How to play' button
let instructions = document.getElementById("info-button");
instructions.addEventListener('click', loadInstructions);
// 'Play now' button
let playNow = document.getElementById("play-button");
playNow.addEventListener('click', hideInstructions);
// First set of toggles : day/night
let firstToggle = document.getElementById("toggleDayNight");
firstToggle.addEventListener('click', dayNight);
// Second set of toggles : calm/chaos
let secondToggle = document.getElementById("toggleCalmChaos");
secondToggle.addEventListener('click', calmChaos);
// Third set of toggles : nature/civilisation
let thirdToggle = document.getElementById("toggleNatureCivilisation");
thirdToggle.addEventListener('click', natureCivilisation);
// 'Submit' button.
let submit = document.getElementById('submit-button');
submit.addEventListener('click', finalTally);
submit.addEventListener("keydown", function(event) {
    if (event.key === "enter") {
        submit.addEventListener('click', finalTally());
    }
});
// 'Reset' button.
let resetButton = document.getElementById('reset-button');
resetButton.addEventListener('click', resetGame);

/**
 * Function to load the instructions page
 */
function loadInstructions(event){
    instructionsPanel.style.display = "block";
    gameArea.style.display = "none";
}

/**
 * Function to hide the instructions page
 */
function hideInstructions(event){
    instructionsPanel.style.display = "none";
    gameArea.style.display = "block";
}

/**
 * Function to determine if the sceen will be Day/Neutral/Night
 * Verifies which radio button is selected.
 * Calls forth the correct image to be displayed
 */
function dayNight(event){
    if (day.checked) {
        document.getElementById("defaultImage").src='assets/images/images-artwork/day.jpg';
    } else if (night.checked){
        document.getElementById("defaultImage").src='assets/images/images-artwork/night.jpg';
    } else if (neutral.checked){
        document.getElementById("defaultImage").src='assets/images/images-artwork/defaultimage.png';
    } 
}

/**
 * Function to determine if the sceen will be Calm/Neutral/Chaos
 * Verifies which radio button is selected.
 * Calls forth the correct image to be displayed
 */
function calmChaos(event){
    if (calm.checked) {
        document.getElementById("firstOverlay").src='assets/images/images-artwork/calm.png';
    } else if (chaos.checked){
        document.getElementById("firstOverlay").src='assets/images/images-artwork/chaos.png';
    } else if (neutral2.checked){
        document.getElementById("firstOverlay").src='assets/images/images-artwork/defaultimage.png';
    } 
}

/**
 * Function to determine if the sceen will be Nature/Neutral/Civilisation
 * Verifies which radio button is selected.
 * Calls forth the correct image to be displayed
 */
function natureCivilisation(event){
    if (nature.checked) {
        document.getElementById("secondOverlay").src='assets/images/images-artwork/nature.png';
    } else if (civilisation.checked){
        document.getElementById("secondOverlay").src='assets/images/images-artwork/civilisation.png';
    } else if (neutral3.checked){
        document.getElementById("secondOverlay").src='assets/images/images-artwork/emptyspace.png';
    } 
}

/**
 * Check the combination of images to tally the if the game is won or lost.
 * A win/lose message is displayed upon completion.
 */
function finalTally(event){
    submit.disabled = true;
    day.disabled = true;
    neutral.disabled = true;
    night.disabled = true;
    calm.disabled = true;
    neutral2.disabled = true;
    chaos.disabled = true;
    nature.disabled = true;
    neutral3.disabled = true;
    civilisation.disabled = true;

    sliderOne.style.backgroundColor = "whitesmoke";
    sliderTwo.style.backgroundColor = "grey";
    sliderThree.style.backgroundColor = "grey";

    if (night.checked && chaos.checked && nature.checked){
        winMessage.style.display = "block";

        let winGraphic = document.getElementById("game-area");
        winGraphic.style.backgroundImage = "url('assets/images/images-artwork/winscreen.png')";
        winGraphic.style.backgroundPosition = 'center center';
    } else {
        loseMessage.style.display = "block";
    } 
}

/**
 * Button configuration to reset the game back to the starting point. 
 * Clears win/lose message.
 * Clears win screen background 
 */
function resetGame(event){
    submit.disabled = false;
    day.disabled = false;
    neutral.disabled = false;
    night.disabled = false;
    calm.disabled = false;
    neutral2.disabled = false;
    chaos.disabled = false;
    nature.disabled = false;
    neutral3.disabled = false;
    civilisation.disabled = false;

    neutral.checked = true;
    neutral2.checked = true;
    neutral3.checked = true;

    sliderOne.style.backgroundColor = "#B5DAA5";
    sliderTwo.style.backgroundColor = "#B5DAA5";
    sliderThree.style.backgroundColor = "#B5DAA5";

    document.getElementById("defaultImage").src='assets/images/images-artwork/defaultimage.png';
    document.getElementById("firstOverlay").src='assets/images/images-artwork/emptyspace.png';
    document.getElementById("secondOverlay").src='assets/images/images-artwork/emptyspace.png';

    winMessage.style.display = "none";
    loseMessage.style.display = "none";

    let winGraphic = document.getElementById("game-area");
    winGraphic.style.backgroundImage = "url('')";
}

});

