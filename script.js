// Global variables
const options = document.querySelectorAll('.option');
const playerScore = document.getElementById('player-score');
const computerScore = document.getElementById('computer-score');
const computerChoice = document.getElementById('computer-choice');
const resetButton = document.getElementById('reset-btn');
const rockimg = document.getElementById('rock')
let playerScoreCount = 0;
let computerScoreCount = 0;

// Function to generate computer's choice
function computerPlay() {
  const computerOptions = ['rock', 'paper', 'scissors'];
  const computerChoice = computerOptions[Math.floor(Math.random() * 3)];
  return computerChoice;
}

// Function to update score and display winner
function updateScore(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return 'Draw';
  } else if (
    (playerChoice === 'rock' && computerChoice === 'scissors') ||
    (playerChoice === 'paper' && computerChoice === 'rock') ||
    (playerChoice === 'scissors' && computerChoice === 'paper')
  ) {
    playerScoreCount++;
    playerScore.textContent = playerScoreCount;
    if (playerScoreCount === 5) {
      alert('You win the game!');
      resetGame();
    }
    return 'You win!';
  } else {
    computerScoreCount++;
    computerScore.textContent = computerScoreCount;
    if (computerScoreCount === 5) {
      alert('Computer wins the game!');
      resetGame();
    }
    return 'Computer wins!';
  }
}

// Function to reset game

function resetGame() {
  playerScoreCount = 0;
  computerScoreCount = 0;
  playerScore.textContent = playerScoreCount;
  computerScore.textContent = computerScoreCount;
  computerChoice.style.opacity = 0.1;
}

resetButton.addEventListener('click', resetGame);

// Event listeners for player's choice
options.forEach((option) => {
  option.addEventListener('click', () => {
    const playerChoice = option.id;
    const computerChoiceValue = computerPlay();
    const computerChoiceImg = document.querySelector(`[alt="${computerChoiceValue}"]`);
    computerChoice.src = computerChoiceImg.src;
    computerChoice.style.opacity = 1;
    const result = updateScore(playerChoice, computerChoiceValue);
    console.log(result);
  });
});
