import Big from 'big.js';

const operate = (firstNum, secondNum, operation) => {
  let result = {};
  let total = 0;
  switch (operation) {
    case '÷':
      if (secondNum === '0') {
        result = { total: 'undefined', next: null, operation };
      } else {
        total = Big(firstNum).div(secondNum).toString();
        result = { total: null, next: total, operation };
      }
      break;
    case '-':
      total = Big(firstNum).minus(secondNum).toString();
      result = { total: null, next: total, operation };
      break;
    case '+':
      total = Big(firstNum).plus(secondNum).toString();
      result = { total: null, next: total, operation };
      break;
    case 'X':
      total = Big(firstNum).times(secondNum).toString();
      result = { total: null, next: total, operation };
      break;
    case '%':
      if (firstNum === null) {
        result = Big(secondNum).div(100).toString();
        return { total: result, next: null, operation };
      }
      if (firstNum !== null && secondNum == null) {
        result = Big(firstNum).div(100).toString();
        return { total: result, next: null, operation };
      }
      result = Big(secondNum).div(100).toString();
      return { total: firstNum, next: result, operation };

    default:
      result = { total: Big(firstNum).toString(), next: secondNum, operation };
  }
  return result;
};

export default operate;
