const you =document.querySelector(".you");

const you_hand_img = document.getElementById("you-hand");
const comp_hand_img = document.getElementById("comp-hand");

// Initialize scores
let scoreYou = 0;
let scoreComp = 0;

const you_score =document.querySelector(".score-you");
const comp_score =document.querySelector(".score-comp");


const option_selector = document.querySelectorAll(".options > img");
const options = document.querySelector(".options");
const play_again = document.querySelector(".play-again");

// Define hand options
const handOptions = ["rock", "paper", "scissors"];

option_selector.forEach((option) => {
    option.addEventListener("click",()=> processInput(option.alt));
});

function processInput(option)
{
    // you_hand_img.src= `assets/${option}-hand.png`;
    const comp_hand = getCompHand();
    displayHand(you_hand_img, option);
    displayHand(comp_hand_img, comp_hand);
    compareHands(option, comp_hand);
}

function getCompHand() {
    const randomIndex = Math.floor(Math.random() * handOptions.length);
    return handOptions[randomIndex];
}

function displayHand(handElement, hand) {
    handElement.src = `assets/${hand}-hand.png`;
}

function compareHands(youHand, compHand){
    if((youHand === "rock" && compHand === "scissors")||(youHand === "scissors" && compHand === "paper") ||(youHand === "paper" && compHand === "rock"))
    {
        scoreYou++;
    } else if (youHand !== compHand) {
        scoreComp++;
    }
    updateScores();
}

function updateScores(){
    you_score.textContent =scoreYou;
    comp_score.textContent =scoreComp;
    if (scoreYou === "5" || scoreComp === "5") {
        options.style.visibility = "hidden";
        play_again.style.visibility = "visible";
}
}

const playBtn = document.querySelector(".play-again-button");
playBtn.onclick = () =>
{
    window.location.href = "game.html";
};