import readlineSync from 'readline-sync';
import { getRandomInt } from './utils.js';

const operators = {
  0: '+',
  1: '-',
  2: '*',
};

const getRandomExpression = () => {
  const operator = operators[getRandomInt(0, 2)];
  const num1 = getRandomInt();
  const num2 = getRandomInt();

  if (operator === '+') return [num1 + num2, `${num1} ${operator} ${num2}`];
  if (operator === '-') return [num1 - num2, `${num1} ${operator} ${num2}`];
  if (operator === '*') return [num1 * num2, `${num1} ${operator} ${num2}`];
  throw new Error(`Unknown operator: ${operator}`);
};

const isCorrect = (correctAnswer, answer) => correctAnswer === Number(answer);

export default () => {
  console.log('Welcome to the Brain Games!');

  const name = readlineSync.question('May I have your name? ');
  const hello = `Hello, ${name}!`;
  console.log(hello);

  console.log('What is the result of the expression?');
  for (let i = 0; i < 3; i += 1) {
    const [correctAnswer, expression] = getRandomExpression();
    const question = `Question: ${expression}`;
    console.log(question);

    const answer = readlineSync.question('Your answer: ');
    if (isCorrect(correctAnswer, answer)) {
      console.log('Correct!');
    }
    if (!isCorrect(correctAnswer, answer)) {
      const errorMessage = `'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`;
      console.log(errorMessage);
      return;
    }
  }

  const congrats = `Congratulations, ${name}!`;
  console.log(congrats);
};
