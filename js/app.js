//storing information for the DOM
let userScore = 0;
let compScore = 0;
const scoreUser_change = document.getElementById("user-score");
const scoreComp_change = document.getElementById("comp-score");
const scoreboard = document.querySelector(".scoreboard");

const result = document.querySelector(".result > p")

const rock = document.getElementById("r");
const paper = document.getElementById("p");
const scissors = document.getElementById("s");
const lizard = document.getElementById("l");
const spock = document.getElementById("sp");


function getComputerSelect(){
    const choices = ['r', 'p', 's', 'l', 'sp'];
    const randomNumber = Math.floor(Math.random() * 5);
    return choices[randomNumber];
}

function convertToWord(letter){
    if(letter === "r") return "Rock";
    if(letter === "p") return "Paper";
    if(letter === "s") return "Scissors";
    if(letter === "l") return "Lizard";
    if(letter === "sp") return "Spock";
}

function win(userSelect, computerSelect){
    userScore++;
    scoreUser_change.innerHTML = userScore;
    scoreComp_change.innerHTML = compScore;
    result.innerHTML = convertToWord(userSelect) + " destroys " + convertToWord(computerSelect) + ". You win!";
}

function lose(userSelect, computerSelect){
    compScore++;
    scoreUser_change.innerHTML = userScore;
    scoreComp_change.innerHTML = compScore;
    result.innerHTML = convertToWord(userSelect) + " loses to " + convertToWord(computerSelect) + ". You lost!";
}

function draw(userSelect, computerSelect){
    result.innerHTML = convertToWord(userSelect) + " equals " + convertToWord(computerSelect) + ". It's a draw!";
}

function game(userSelect) {
    const computerSelect = getComputerSelect();
    switch (userSelect + computerSelect) {
        case "sp":
        case "pr":
        case "rl":
        case "lsp":
        case "sps":
        case "sl":
        case "lp":
        case "psp":
        case "spr":
        case "rs":
            win(userSelect, computerSelect);
            break;
        case "ps":
        case "rp":
        case "lr":
        case "spl":
        case "ssp":
        case "ls":
        case "pl":
        case "spp":
        case "rsp":
        case "sr":
            lose(userSelect, computerSelect);
            break;
        case "rr":
        case "pp":
        case "ss":
        case "ll":
        case "spsp":
            draw(userSelect, computerSelect);
    }
    
}

function main() {
    rock.addEventListener('click', function () {
        game("r");
    });

    paper.addEventListener('click', function () {
        game("p");
    });

    scissors.addEventListener('click', function () {
        game("s");
    });

    lizard.addEventListener('click', function () {
        game("l");
    });

    spock.addEventListener('click', function () {
        game("sp");
    });
}

main();