/* eslint-disable import/extensions */
import { printMessage, getUserInput } from './cli.js';
import generateEvenData from './Games/even.js';

const greeting = () => {
  printMessage('Welcome to the Brain Games!');
  const name = getUserInput('May I have your name? ');
  printMessage(`Hello, ${name}!`);

  return name;
};


const generateData = (gameType) => {
    switch(gameType) {
      case('even'):
        return generateEvenData();
    }
}

const printRule = (gameType) => {
  switch(gameType) {
    case('even'):
      printMessage('Answer "yes" if the number is even, otherwise answer "no".');
  }
}


const startGame = (gameType, userName) => {
  printRule(gameType);
  const gameData = generateData(gameType);

  for (const data of gameData) {
    printMessage(`Question: ${data.question}`);
    const userAnswer = getUserInput('Your answer: ');
    const answer = data.answer;

    if (userAnswer !== answer) {
      printMessage(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`);
      printMessage(`Let's try again, ${userName}!`);
      return;
    }
    printMessage('Correct!')
  }

  printMessage(`Congratulations, ${userName}!`);
};

export { greeting, startGame };
