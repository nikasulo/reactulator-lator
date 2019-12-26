const Big = require('big.js');

export const operate = (numberOne, numberTwo, operation) => {
  numberOne = new Big(numberOne);
  numberTwo = new Big(numberTwo);

  if(operation === '+'){
    return numberOne.plus(numberTwo)
  }

  if(operation === '-'){
    return numberOne.minus(numberTwo);
  }

  if(operation === '/'){
    return numberOne.div(numberTwo);
  }

  if(operation === '*'){
    return numberOne.times(numberTwo);
  }

  if(operation === '%'){
    return numberOne.mod(numberTwo);
  }
}