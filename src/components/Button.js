import PropTypes from 'prop-types';
import '../stylesheet/Button.css';
import React from 'react';

const Button = ({
  name, clickHandler, operator, wide,
}) => {
  const handleClick = (buttonName) => clickHandler(buttonName);
  return (
    <button
      type="button"
      onClick={(event) => handleClick(event.target.name)}
      name={name}
      className={`${operator} ${wide}`}
    >
      {name}
    </button>
  );
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
  operator: PropTypes.string,
  wide: PropTypes.string,
};

Button.defaultProps = {
  operator: 'Button',
  wide: '',
};

export default Button;
