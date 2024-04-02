import { getRandomInt, isPrime } from '../utils.js';
import game from '../index.js';

const instructions = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getQuestionAndAnswer = () => {
  const number = getRandomInt(0, 100);

  return [`${number}`, `${isPrime(number) ? 'yes' : 'no'}`];
};

export default () => game(instructions, getQuestionAndAnswer);
