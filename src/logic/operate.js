const Big = require('big.js');

export default (numberOne, numberTwo, operation) => {
  const firstNumber = new Big(numberOne);
  const secondNumber = new Big(numberTwo);
  let result;

  if (operation === '+') {
    result = firstNumber.plus(secondNumber);
  }

  if (operation === '-') {
    result = firstNumber.minus(secondNumber);
  }

  if (operation === '/') {
    if ((firstNumber === 0 && secondNumber === 0) || secondNumber) {
      result = 'UNDEFINED';
    } else {
      result = firstNumber.div(secondNumber);
    }
  }

  if (operation === '*') {
    result = firstNumber.times(secondNumber);
  }

  if (operation === '%') {
    result = firstNumber.mod(secondNumber);
  }

  return result;
};
