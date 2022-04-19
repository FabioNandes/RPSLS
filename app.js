let userScore = 0;  
let computerScore = 0;  
const userScore_span = document.getElementById('user-score');  
const computerScore_span = document.getElementById('computer-score');  
const scoreBoard_div = document.querySelector('.score-board');  
const result_div = document.querySelector('.result');  
const rock_div = document.getElementById('rock');  
const paper_div = document.getElementById('paper');  
const scissors_div = document.getElementById('scissors');  
const lizard_div = document.getElementById('lizard');  
const spock_div = document.getElementById('spock');  

function getComputerChoice() {  
  const choices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];  
  const randomNumber = Math.floor(Math.random() * 5);  
  return choices[randomNumber];  
}  


function convertCase(anythingIwant) {  
  if (anythingIwant === 'paper') return 'Paper';  
  if (anythingIwant === 'scissors') return 'Scissors'; 
  if (anythingIwant === 'lizard') return 'Lizard';
  if (anythingIwant === 'spock') return 'Spock';  
  return 'Rock';    
}  

function win(user, computer) {  
  userScore++;  
   console.log('user score is ' + userScore + ' ' + user);  
  userScore_span.innerHTML = userScore;  
  const userName = ' (user)'.fontsize(3).sup();  
  const compName = ' (comp)'.fontsize(3).sup();  
  result_div.innerHTML = `<p>${convertCase(user)}${userName} beats ${convertCase(computer)}${compName}. You win!</p>`;  
  const roundStatus = document.getElementById(user);  
  roundStatus.classList.add('winningStyles');  
  setTimeout(() => roundStatus.classList.remove('winningStyles'), 300);  
}  


function loses(user, computer) {  
  computerScore++;  
    console.log('computer score is ' + computerScore + ' ' + computer);  
  computerScore_span.innerHTML = computerScore;  
  const userName = ' (user)'.fontsize(3).sup();  
  const compName = ' (comp)'.fontsize(3).sup();  
  result_div.innerHTML = `<p>${convertCase(computer)}${compName} beats ${convertCase(user)}${userName}. You lose!</p>`;  
  const roundStatus = document.getElementById(user);  
  roundStatus.classList.add('losingStyles');  
  setTimeout(() => roundStatus.classList.remove('losingStyles'), 300);  
}  

function draw(user, computer) {  
  const userName = ' (user)'.fontsize(3).sup();  
  const compName = ' (comp)'.fontsize(3).sup();  
  result_div.innerHTML = `<p>It was a draw! You both chose ${convertCase(user)}</p>`;  
   "It was a draw! You both chose " + user + " " + computer; // old js  
  const roundStatus = document.getElementById(user);  
  roundStatus.classList.add('drawStyles');  
  setTimeout(() => roundStatus.classList.remove('drawStyles'), 300);  
}  

function game(userChoice) {  
  const computerChoice = getComputerChoice();  
   console.log('Game function: user choice is = ' + userChoice);  
   console.log('Game function: computer choice is = ' + computerChoice);  
  switch (userChoice + computerChoice) {  
   case 'paperrock':  
   case 'rockscissors':  
   case 'scissorspaper':
   case 'rocklizard':
   case 'lizardspock':
   case 'spockscissors':
   case 'scissorslizard':
   case 'lizardpaper':
   case 'paperspock':
   case 'spockrock':  
    win(userChoice, computerChoice);  
     console.log("user wins");  
    break;  
   case 'rockpaper':  
   case 'scissorsrock':  
   case 'paperscissors':
   case 'lizardrock':
   case 'spocklizard':
   case 'scissorsspock':
   case 'lizardscissors':
   case 'paperlizard':
   case 'spockpaper':
   case 'rockspock':  
    loses(userChoice, computerChoice);  
     console.log("computer wins");  
    break;  
   case 'rockrock':  
   case 'scissorsscissors':  
   case 'paperpaper': 
   case 'lizardlizard':
   case 'spockspock': 
    draw(userChoice, computerChoice);  
     console.log("draw");  
    break;  
  }  
}  


function main() {  
  rock_div.addEventListener('click', function() {  
    game('rock');  
  });  
  paper_div.addEventListener('click', function() {  
    game('paper');  
  });  
  scissors_div.addEventListener('click', function() {  
    game('scissors');  
  }); 
  lizard_div.addEventListener('click', function() {  
    game('lizard');  
  });
  spock_div.addEventListener('click', function() {  
    game('spock');  
  });   
} 

main();  