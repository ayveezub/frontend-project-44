import { getEuclidGcd, getRandomInt } from '../utils.js';
import game from '../index.js';

const instructions = 'Find the greatest common divisor of given numbers.';

const getQuestionAndAnswer = () => {
  const num1 = getRandomInt(0, 100);
  const num2 = getRandomInt(0, 100);

  const correctAnswer = getEuclidGcd(num1, num2);

  return [`${num1} ${num2}`, `${correctAnswer}`];
};

export default () => game(instructions, getQuestionAndAnswer);
