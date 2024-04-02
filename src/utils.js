const getArithmeticProgression = (firstElem, step, length) => {
  const result = [];
  for (let i = 0; i < length; i += 1) {
    result.push(firstElem + step * i);
  }

  return result;
};

const getEuclidGcd = (num1, num2) => {
  let a = num1;
  let b = num2;
  while (b !== 0) {
    const temp = a % b;

    a = b;
    b = temp;
  }

  return a;
};

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const isEven = (number) => number % 2 === 0;

const isSomeNonprime = (number) => number <= 1 || (isEven(number) && number !== 2);

const isPrime = (number) => {
  if (isSomeNonprime(number)) return false;

  const limit = Math.floor(Math.sqrt(number));
  for (let i = 2; i <= limit; i += 1) {
    if (number % i === 0) return false;
  }

  return true;
};

export {
  getArithmeticProgression,
  getEuclidGcd,
  getRandomInt,
  isEven,
  isPrime,
};
