import operate from './operate';

const calculate = ({ total, next, operation }, buttonName) => {
  switch (buttonName) {
    case '+/-':
      return { total: total * -1, next: next * -1, operation };
    case 'AC':
      return { total: 0, next: 0, operation };
    default:
      return operate(total, next, buttonName);
  }
};

export default calculate;
