import readlineSync from 'readline-sync';
import { getRandomInt, isEven } from './utils.js';

const getCorrectAnswer = (number) => (isEven(number) ? 'yes' : 'no');

const isCorrect = (number, answer) => {
  if (isEven(number) && answer === 'yes') return true;
  if (!isEven(number) && answer === 'no') return true;
  return false;
};

export default () => {
  console.log('Welcome to the Brain Games!');

  const name = readlineSync.question('May I have your name? ');
  const hello = `Hello, ${name}!`;
  console.log(hello);

  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const number = getRandomInt();
    const question = `Question: ${number}`;
    console.log(question);

    const answer = readlineSync.question('Your answer: ');
    if (isCorrect(number, answer)) {
      console.log('Correct!');
    }
    if (!isCorrect(number, answer)) {
      const errorMessage = `'${answer}' is wrong answer ;(. Correct answer was '${getCorrectAnswer(number)}'.\nLet's try again, ${name}!`;
      console.log(errorMessage);
      return;
    }
  }

  const congrats = `Congratulations, ${name}!`;
  console.log(congrats);
};
