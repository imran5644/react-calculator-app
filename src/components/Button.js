import PropTypes from 'prop-types';
import '../stylesheet/Button.css';

const Button = ({
  name, clickHandler, operator, span2,
}) => {
  const handleClick = (buttonName) => clickHandler(buttonName);
  return <button type="button" onClick={(event) => handleClick(event.target.name)} name={name} className={`${operator} ${span2}`}>{name}</button>;
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
  operator: PropTypes.string,
  span2: PropTypes.string,
};

Button.defaultProps = {
  operator: 'Button',
  span2: '',
};

export default Button;
