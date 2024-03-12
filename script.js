console.log('hi');

const getUserChoice = userInput => {
userInput = userInput.toLowerCase();
if (userInput=== 'rock' || userInput=== 'paper' || userInput=== 'scissors' || userInput==='bomb') {
  return userInput;
} else {
  console.log('Error!')
}
};

function getComputerChoice () {
randomNumber = Math.floor(Math.random() * 3);
switch (randomNumber) {
  case 0:
    return 'rock';
    break;
  case 1:
    return 'paper';
    break;
  case 2: 
    return 'scissors'
    break;
}
}

function determineWinner (userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return 'The game is a tie!';
  }
  if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return 'Computer wins!'
    } else {
      return 'Human wins!'
    }
  }
  if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return 'Computer wins!'
    } else {
      return 'Human wins!'
    }
  }
  if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return 'Computer wins!'
    } else {
      return 'Human wins!'
    }
    
  }
  if(userChoice === 'bomb'){
      return 'Human spectacularly wins!'
    }
}

function playGame () {
  const userChoice = getUserChoice('rock');
  const computerChoice = getComputerChoice ();
  console.log('You threw: ' + userChoice);
  console.log('The computer threw: ' + computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
};
playGame();


