import { getArithmeticProgression, getRandomInt } from '../utils.js';
import game from '../index.js';

const instructions = 'What number is missing in the progression?';

const getQuestionAndAnswer = () => {
  const firstElement = getRandomInt(0, 100);
  const step = getRandomInt(1, 10);
  const length = getRandomInt(5, 10);

  const progression = getArithmeticProgression(firstElement, step, length);
  const hiddenElementIndex = getRandomInt(0, length - 1);
  const correctAnswer = progression[hiddenElementIndex];

  progression[hiddenElementIndex] = '..';

  return [`${progression.join(' ')}`, `${correctAnswer}`];
};

export default () => game(instructions, getQuestionAndAnswer);
