import { getRandomInt, isEven } from '../utils.js';
import game from '../index.js';

const instructions = 'Answer "yes" if the number is even, otherwise answer "no"';

const getQuestionAndAnswer = () => {
  const number = getRandomInt();
  const correctAnswer = isEven(number) ? 'yes' : 'no';

  return [`Question: ${number}`, correctAnswer];
};

export default () => game(instructions, getQuestionAndAnswer);