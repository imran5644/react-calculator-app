import operate from './operate';

const calculate = ({ total, next, operation }, buttonName) => {
  switch (buttonName) {
    case '+/-':
      return { total: total * -1, next: next * -1, operation };

    case 'AC':
      return { total: null, next: null, operation };

    case '%':
      return operate(total, next, buttonName);

    case '=':
      return operate(total, next, operation);
      
    default:
      return operate(total, next, buttonName);
  }
};

export default calculate;
