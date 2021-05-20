import React, { useState } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

const App = () => {
  const [calculator, setCalculator] = useState({
    total: null,
    next: null,
    operation: null,
    lastClicked: null,
  });

  const handleClick = (buttonName) => {
    const result = calculate(calculator, buttonName);
    setCalculator({ ...result, lastClicked: buttonName });
  };

  const result = calculator;
  return (
    <>
      <Display result={result} />
      <ButtonPanel clickHandler={handleClick} />
    </>
  );
};

export default App;
