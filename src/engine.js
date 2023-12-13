/* eslint-disable import/extensions */
import { showMessage, getUserData } from './cli.js';
import generateData from './Games/even.js';

const greeting = () => {
  showMessage('Welcome to the Brain Games!');
  const name = getUserData('May I have your name? ');
  showMessage(`Hello, ${name}!`);

  return name;
};

const startGame = (name) => {
  showMessage('Answer "yes" if the number is even, otherwise answer "no".');
  const rounds = 3;
  const gameData = generateData();
  let message = `Congratulations, ${name}!`;

  for (let i = 0; i < rounds; i += 1) {
    const current = gameData[i];
    showMessage(`Question: ${current.question}`);
    const answer = getUserData('Your answer: ');

    if (answer !== current.answer) {
      message = `'${answer}' is wrong answer ;(. Correct answer was '${current.answer}'.\nLet's try again, ${name}!.`;
      break;
    }

    showMessage('Correct!');
  }
  showMessage(message);
};

export { greeting, startGame };
