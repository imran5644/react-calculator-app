import operate from './operate';

const prepareData = (total, next, operation, buttonName, lastClicked) => {
  const operations = ['+', '-', '÷', 'X', '='];
  let result = null;
  if (buttonName === '.') {
    result = { total, next: next == null ? `0${buttonName}` : next + buttonName, operation };
  } else if (buttonName in ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']) {
    result = { total, next: next == null ? buttonName : next + buttonName, operation };
  } else {
    switch (buttonName) {
      case '+':
      case '-':
      case '÷':
      case 'X':
      case '=':
        if (total === null || total === 'undefined') {
          result = {
            total: next,
            next: null,
            operation: buttonName,
          };
        } else if (!operations.includes(lastClicked)) {
          result = { total, next, operation };
        }
        break;
      default:
        result = { total, next, operation };
    }
  }
  return result;
};

const calculate = ({
  total, next, operation, lastClicked,
}, buttonName) => {
  let result = null;
  const data = prepareData(total, next, operation, buttonName, lastClicked);
  if (buttonName === '.') {
    return data;
  }
  if (buttonName in ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']) {
    return data;
  }

  if (buttonName === 'AC') {
    return { total: null, next: null, operation: null };
  }
  if (buttonName === '%') {
    result = operate(data.total, data.next, buttonName);
    result = { ...result, operation: data.operation };
    return result;
  }
  if (data.next !== null) {
    switch (buttonName) {
      case '+/-':
        return { total, next: data.next * -1, operation: data.operation };
      case '=':
        result = operate(data.total, data.next, data.operation);
        result.operation = null;
        return result;
      default:
        return operate(data.total, data.next, buttonName);
    }
  }

  return data;
};

export default calculate;
