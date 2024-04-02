const getArithmeticProgression = (firstElem, step, length) => {
  if (!Number.isInteger(firstElem) || !Number.isInteger(step) || !Number.isInteger(length)) {
    throw new Error(`Invalid arguments: ${firstElem}, ${step}, ${length}`);
  }

  const result = [];
  for (let i = 0; i < length; i += 1) {
    result.push(firstElem + step * i);
  }

  return result;
};

const euclidGcd = (num1, num2) => {
  if (!Number.isInteger(num1) || !Number.isInteger(num2)) {
    throw new Error(`Invalid arguments: ${num1}, ${num2}`);
  }

  let a = num1;
  let b = num2;

  while (b !== 0) {
    const temp = a % b;

    a = b;
    b = temp;
  }

  return a;
};

const getGcd = (...numbers) => {
  let result = numbers[0];

  for (let i = 1; i < numbers.length; i += 1) {
    result = euclidGcd(result, numbers[i]);
  }

  return result;
};

const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const getRandomInt = (...range) => {
  if (range.length === 0) return randomInt(0, 100);
  if (range.length === 1) return randomInt(0, range[0]);
  if (range.length === 2) return randomInt(range[0], range[1]);
  throw new Error(`Invalid range: ${range}`);
};

const isEven = (number) => number % 2 === 0;

export {
  getArithmeticProgression,
  getGcd,
  getRandomInt,
  isEven,
};
