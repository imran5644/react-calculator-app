import React, { useState } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';
import '../stylesheet/index.css';

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
    <div className="calculator">
      <Display result={result} />
      <ButtonPanel clickHandler={handleClick} />
    </div>
  );
};

export default App;
