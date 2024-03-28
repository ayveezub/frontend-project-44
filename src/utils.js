const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const getRandomInt = (...range) => {
  if (range.length === 0) return randomInt(0, 100);
  if (range.length === 1) return randomInt(0, range[0]);
  if (range.length === 2) return randomInt(range[0], range[1]);
  throw new Error(`Invalid range: ${range}`);
};

const isEven = (number) => number % 2 === 0;

export { getRandomInt, isEven };
