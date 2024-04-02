import { getRandomInt } from '../utils.js';
import game from '../index.js';

const instructions = 'What is the result of the expression?';

const operators = {
  0: '+',
  1: '-',
  2: '*',
};

const getQuestionAndAnswer = () => {
  const operator = operators[getRandomInt(0, 2)];
  const num1 = getRandomInt(0, 100);
  const num2 = getRandomInt(0, 100);

  if (operator === '+') return [`${num1} ${operator} ${num2}`, `${num1 + num2}`];
  if (operator === '-') return [`${num1} ${operator} ${num2}`, `${num1 - num2}`];
  if (operator === '*') return [`${num1} ${operator} ${num2}`, `${num1 * num2}`];
  throw new Error(`Unknown operator: ${operator}`);
};

export default () => game(instructions, getQuestionAndAnswer);
