import readlineSync from 'readline-sync';

export default () => {
  const welcomeLine = 'Welcome to the Brain Games!';
  console.log(welcomeLine);

  const name = readlineSync.question('May I have your name? ');
  const helloLine = `Hello, ${name}!`;
  console.log(helloLine);
};
