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
      total = bigFirstNum.minus(bigSecondNum).toString();;
      result = { total, next: null, operation };
      break;

    case 'X':
      total = bigFirstNum.times(bigSecondNum).toString();;
      result = { total, next: null, operation };
      break;

    case '÷':
      total = bigFirstNum.div(bigSecondNum).toString();;
      result = { total, next: null, operation };
      break;

    case '%':
      if (numberTwo != null) {
        return { total: bigFirstNum, next: bigSecondNum.div(100), operation };
      }
      return { total: bigFirstNum.div(100), next: bigSecondNum, operation };

    default:
      result = { bigFirstNum, bigSecondNum, operation };
      break;
  }

  return result;
};

export default operate;
