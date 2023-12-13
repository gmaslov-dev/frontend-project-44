/* eslint-disable no-console */
import readlineSync from 'readline-sync';

const getUserData = (message) => readlineSync.question(message);
const showMessage = (message) => console.log(message);

export { getUserData, showMessage };
