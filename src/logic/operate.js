import Big from 'big.js';

const operate = (firstNum, secondNum, operation) => {
  const bigFirstNum = Big(firstNum);
  const bigSecondNum = Big(secondNum);

  let result = {};
  let total = 0;

  switch (operation) {
    case '+':
      total = bigFirstNum.plus(bigSecondNum).toString();
      result = { total, next: null, operation };
      break;

    case '-':
      total = bigFirstNum.minus(bigSecondNum).toString();
      result = { total, next: null, operation };
      break;

    case 'X':
      total = bigFirstNum.times(bigSecondNum).toString();
      result = { total, next: null, operation };
      break;

    case '÷':
      if (secondNum === '0') {
        result = { total: 'undefined', next: null, operation };
      } else {
        total = bigFirstNum.div(bigSecondNum).toString();
        result = { total, next: null, operation };
      }
      break;

    case '%':
      result = bigSecondNum.div(100).toString();
      if (bigFirstNum === null) {
        return { total: result, next: null, operation };
      }
      return { total: bigFirstNum.toString(), next: result, operation };

    default:
      result = { total: bigFirstNum.toString(), next: bigSecondNum, operation };
      break;
  }

  return result;
};

export default operate;
