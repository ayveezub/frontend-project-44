import { getArithmeticProgression, getRandomInt } from '../utils.js';
import game from '../index.js';

const instructions = 'What number is missing in the progression?';

const getQuestionAndAnswer = () => {
  const firstElem = getRandomInt();
  const step = getRandomInt(1, 10);
  const length = getRandomInt(5, 10);
  const progression = getArithmeticProgression(firstElem, step, length);
  const hiddenElemInd = getRandomInt(0, length - 1);
  const correctAnswer = progression[hiddenElemInd];

  progression[hiddenElemInd] = '..';
  return [`Question: ${progression.join(' ')}`, `${correctAnswer}`];
};

export default () => game(instructions, getQuestionAndAnswer);
