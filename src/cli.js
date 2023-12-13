import readlineSync from 'readline-sync';

// eslint-disable-next-line no-console
const showGreeting = () => console.log('Welcome to the Brain Games!');
const getName = () => readlineSync.question('May I have your name? ');

export { showGreeting, getName };
