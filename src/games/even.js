import { getRandomInt, isEven } from '../utils.js';
import game from '../index.js';

const instructions = 'Answer "yes" if the number is even, otherwise answer "no"';

const getQuestionAndAnswer = () => {
  const number = getRandomInt(0, 100);

  const correctAnswer = isEven(number) ? 'yes' : 'no';

  return [`${number}`, `${correctAnswer}`];
};

export default () => game(instructions, getQuestionAndAnswer);
