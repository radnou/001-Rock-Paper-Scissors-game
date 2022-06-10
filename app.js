/**
 * 
 * @author MOSSABELY Radnoumane
 * @description Simple rock,paper,scissor on JavaScript 
 * @version 1.0
 * 
 */



/**
 * 
 * @param userInput 
 * @returns the userInput or log an error 
 */

const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (
    userInput === "rock" ||
    userInput === "paper" ||
    userInput === "scissors"||
    userInput === "bomb"
  ) {
    return userInput;
  } else {
    console.log("Error!");
  }
};


/**
 * 
 * @returns String rock, scissors or paper 
 */
const getComputerChoice = () => {
  let randomNumber = Math.floor(Math.random() * 3);
  //console.log(randomNumber);
  switch (randomNumber) {
    case 0:
      return "rock";
    case 1:
      return "scissors";
    case 2:
      return "paper";
  }
};
/**
 * 
 * @param userChoice 
 * @param computerChoice 
 * @returns the result of comparaison of both choice , player won or computer won or tie game 
 */
const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === 'bomb') {
    return "You won !";
  }

  if (userChoice === computerChoice) {
    return "the was a tie";
  }

  if (userChoice === "rock") {
    if (computerChoice === "scissors") {
      return "You won ! ";
    } else {
      return "The Computer won !";
    }
  }
  if (userChoice === "paper") {
    if (computerChoice === "scissors") {
      return "The Computer won!";
    } else {
      return "You won !";
    }
  }

  if (userChoice === "scissors") {
    if (computerChoice === "paper") {
      return "You won !";
    } else {
      return "The Computer won !";
    }
  }
};
 /**
  * 
  */
const playGame = () => {
  const userChoice = getUserChoice('scissors');
  const computerChoice = getComputerChoice();
  console.log("You threw: "+ userChoice);
  console.log("The computer threw: "+ computerChoice);
  console.log(determineWinner(userChoice,computerChoice));
};

playGame();
