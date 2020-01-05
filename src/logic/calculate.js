import { operate } from "./operate";

export const calculate = (dataObj, buttonName) => {
  let {next, total, operation, displayText} = dataObj;

  if (buttonName === 'AC'){
    return {
      total: null,
      next: null,
      operation: null,
      displayText: ''
    }
  }

  if (buttonName === '='){
    if(next && operation && (next.length - operation.length === 1)){
      //flip operators and operands so you can deal with the operations in FIFO manner
      next = next.reverse();
      operation = operation.reverse();

      //If there's more than one operand, operate
      while(next.length > 1){
        let numberOne, numberTwo, operator, result, ans;
        numberOne = next.pop();
        numberTwo = next.pop();
        operator = operation.pop();
        result = operate(parseInt(numberOne), parseInt(numberTwo), operator);
        //Push the result so multiple operations can happen
        next.push(result);
        total = ans ? parseInt(ans) + result : result;
      }

      return{
        total,
        next: [total],
        operation: null,
        displayText: `${total}`
      }
    }
    return dataObj; 
  }

  //If button is an operator
  if (['+','/','*','%','-'].includes(buttonName)){
    //If operands exist
    if (next){
      if (operation){
        if(operation.length < next.length){
          operation.push(buttonName);
          displayText = `${displayText}${buttonName}`
        }
      } else {
        operation = [buttonName];
        displayText = `${displayText}${buttonName}`
      }
    }
  // If button is not an operator
  } else {
    //If operands and operators are the same amount, start a new number
    if (operation && operation.length === next.length){
      next.push(buttonName);
    } else {
      if(next){
        next[next.length - 1] = `${next[next.length-1]}${buttonName}`;
      } else {
        next = [buttonName];
      }
    }
    displayText = displayText ? `${displayText}${buttonName}` : `${buttonName}`
  }

  return {
    total,
    next,
    operation,
    displayText
  }

}