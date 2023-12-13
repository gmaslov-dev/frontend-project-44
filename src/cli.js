import readlineSync from "readline-sync";

const showGreeting = () => console.log("Welcome to the Brain Games!");
const getName = () => readlineSync.question("May I have your name? ");

export { showGreeting, getName };
