import operate from './operate';

const calculate = ({ total, next, operation }, buttonName) => {
  let result = null;
  switch (buttonName) {
    case '+/-':
      return { total: total * -1, next: next * -1, operation };

    case 'AC':
      return { total: null, next: null, operation };

    case '%':
      result = operate(total, next, buttonName);
      result = { ...result, operation };
      return result;

    case '=':
      return operate(total, next, operation);

    default:
      return operate(total, next, buttonName);
  }
};

export default calculate;
