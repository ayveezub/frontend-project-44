import { getGcd, getRandomInt } from '../utils.js';
import game from '../index.js';

const instructions = 'Find the greatest common divisor of given numbers.';

const getQuestionAndAnswer = () => {
  const num1 = getRandomInt();
  const num2 = getRandomInt();
  const correctAnswer = getGcd(num1, num2);

  return [`Question: ${num1} ${num2}`, `${correctAnswer}`];
};

export default () => game(instructions, getQuestionAndAnswer);
