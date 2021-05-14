import PropTypes from 'prop-types';

const Button = ({ name }) => (
  <div className="button">
    { name }
  </div>
);

Button.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Button;
