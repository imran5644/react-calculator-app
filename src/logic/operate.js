import Big from 'big.js';

const operate = (firstNum, secondNum, operation) => {
  const bigFirstNum = Big(firstNum);
  const bigSecondNum = Big(secondNum);

  let result = {};
  let total = 0;

  switch (operation) {
    case '+':
      total = bigFirstNum + bigSecondNum;
      result = { total, next: total, operation };
      break;

    case '-':
      total = bigFirstNum - bigSecondNum;
      result = { total, next: total, operation };
      break;

    case 'X':
      total = bigFirstNum * bigSecondNum;
      result = { total, next: total, operation };
      break;

    case '/':
      total = bigFirstNum / bigSecondNum;
      result = { total, next: total, operation };
      break;
    
    case '%':
        return { total: bigFirstNum, next: bigSecondNum/100, operation }

    default:
      result = { bigFirstNum, bigSecondNum, operation };
      break;
  }

  return result;
};

export default operate;
