import PropTypes from 'prop-types';
import '../stylesheet/Button.css';

const Button = ({ name }) => (
  <button type="button" className="Button">
    { name }
  </button>
);

Button.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Button;
