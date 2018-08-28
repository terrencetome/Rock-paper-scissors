let userScore = 0;
let comptureScore = 0;
const userScore_span =  document.getElementById('user-score');
const comptuerScore_span = document.getElementById('computer-score');
const scoreboard_div = document.querySelector('.score-board');
const result_p = document.querySelector('.result >p');
const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissors_div = document.getElementById('s');

function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function converToWord(letter){
    if (letter === 'r') return'Rock';
    if (letter === 'p') return'Paper';
     return'Scissors';
}


function win(userChoice, computerChoice){
    const smallUserWord = 'user'.fontSize(3).sup();
    const smallComputerWord = 'comp'.fontSize(3).sup();
    const userChoice_div = document.getElementById(userChoice);
    userScore++;
    userScore_span.innerHTML = userScore;
    comptuerScore_span.innerHTML = comptureScore;
    result_p.innerHTML = '${convertToWord(userChice)}${smallUserWord} beats ${convertToWord(computerChoice)}${smallComputerWoed}.You win!';
    userChoice_div.classList.add('green-glow');
    setTimeout(() => userChoice_div.classList.remove('green-glow'), 500);
}


function loose(userChoice, computerChoice){
    const smallUserWord = 'user'.fontSize(3).sup();
    const smallComputerWord = 'comp'.fontSize(3).sup();
    const userChoice_div = document.getElementById(userChoice);
    computerScore++;
    userScore_span.innerHTML = userScore;
    comptuerScore_span.innerHTML = comptureScore;
    result_p.innerHTML = '${convertToWord(userChice)}${smallUserWord} looses to ${convertToWord(computerChoice)}${smallComputerWoed}.You lost!';
    userChoice_div.classList.add('red-glow');
    setTimeout(() => userChoice_div.classList.remove('red-glow'), 500);
}


function draw(userChoice, computerChoice){
    const smallUserWord = 'user'.fontSize(3).sup();
    const smallComputerWord = 'comp'.fontSize(3).sup();
    const userChoice_div = document.getElementById(userChoice);
    result_p.innerHTML = '${convertToWord(userChice)}${smallUserWord} equals ${convertToWord(computerChoice)}${smallComputerWoed}.It is a draw!';
    userChoice_div.classList.add('grey-glow');
    setTimeout(() => userChoice_div.classList.remove('green-glow'), 500);
}


function game(userChoice){
    const computerChoice = getComputerChoice;
    switch (userChoice + computerChoice){
         case'rs':
         case'pr':
         case'sp':
                win(userChoice , computerChoice);
            break;
        case'rs':
        case'pr':
        case'sp':
            loose(userChoice , computerChoice);
            break;
        case'rr':
        case'pp':
        case'ss':
            draw(userChoice, computerChoice);
            break;
    }
}

(function (){
    rock_div.addEventListener('click', () => game('r'));
    paper_div.addEventListener('click', () => game('p'));
    scissors_div.addEventListener('click', () => game('s'));
})();
