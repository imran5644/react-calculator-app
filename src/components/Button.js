import PropTypes from 'prop-types';
import '../stylesheet/Button.css';

const Button = ({ name, clickHandler }) => {
  const handleClick = (buttonName) => clickHandler(buttonName);
  return (
    <button
      type="button"
      onClick={(event) => handleClick(event.target.name)}
      name={name}
      className="Button"
    >
      {name}
    </button>
  );
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
};

export default Button;
