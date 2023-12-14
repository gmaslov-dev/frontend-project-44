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
  switch (gameType) {
    case 'even':
      return generateEvenData();
    default:
      return null;
  }
};

const getRule = (gameType) => {
  switch (gameType) {
    case 'even':
      return 'Answer "yes" if the number is even, otherwise answer "no".';
    default:
      return null;
  }
};

const startGame = (gameType, userName) => {
  printMessage(getRule(gameType));
  const gameData = generateData(gameType);

  for (let i = 0; i < gameData.length; i += 1) {
    printMessage(`Question: ${gameData[i].question}`);
    const userAnswer = getUserInput('Your answer: ');
    const { answer } = gameData[i];

    if (userAnswer !== answer) {
      printMessage(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`,
      );
      printMessage(`Let's try again, ${userName}!`);
      return;
    }
    printMessage('Correct!');
  }

  printMessage(`Congratulations, ${userName}!`);
};

export { greeting, startGame };
