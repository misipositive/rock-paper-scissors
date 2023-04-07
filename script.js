const buttons = document.querySelectorAll('.btn');
const playerScoreDisplay = document.querySelector('.player-score');
const computerScoreDisplay = document.querySelector('.computer-score');
const resultText = document.querySelector('.result-text');
const restartButton = document.querySelector('.restart-btn');
const darkLayer = document.querySelector('.dark-layer');
let playerScore = 0;
let computerScore = 0;
let roundCount = 0;

function playRound(playerSelection) {
  const computerSelection = computerPlay();
  roundCount++;
  let roundResult = '';

  if (playerSelection === computerSelection) {
    roundResult = 'Tie';
  } else if (
    (playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'paper' && computerSelection === 'rock') ||
    (playerSelection === 'scissors' && computerSelection === 'paper')
  ) {
    roundResult = 'Win';
    playerScore++;
    playerScoreDisplay.textContent = `Player: ${playerScore}`;
  } else {
    roundResult = 'Lose';
    computerScore++;
    computerScoreDisplay.textContent = `Computer: ${computerScore}`;
  }

  resultText.textContent = `${roundResult}! You played ${playerSelection}, and the computer played ${computerSelection}.`;

  if (playerScore === 5 || computerScore === 5) {
    endGame();
  }
}

function computerPlay() {
  const choices = ['rock', 'paper', 'scissors'];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function endGame() {
  for (const button of buttons) {
    button.disabled = true;
  }

  restartButton.style.display = 'block';
  darkLayer.style.display = 'flex';

  if (playerScore > computerScore) {
    resultText.textContent = 'Congratulations, you won!';
  } else {
    resultText.textContent = 'Sorry, you lost!';
  }
}

function restartGame() {
  playerScore = 0;
  computerScore = 0;
  roundCount = 0;
  playerScoreDisplay.textContent = 'Player: 0';
  computerScoreDisplay.textContent = 'Computer: 0';
  resultText.textContent = 'Make Your Move!';
  restartButton.style.display = 'none';
  darkLayer.style.display = 'none';

  for (const button of buttons) {
    button.disabled = false;
  }
}

for (const button of buttons) {
  button.addEventListener('click', () => {
    playRound(button.id);
  });
}

restartButton.addEventListener('click', restartGame);