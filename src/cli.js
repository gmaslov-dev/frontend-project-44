/* eslint-disable no-console */
import readlineSync from 'readline-sync';

const printMessage = (message) => console.log(message);
const getUserInput = (message) => readlineSync.question(message);

export { printMessage, getUserInput };
