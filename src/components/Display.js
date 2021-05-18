import PropTypes from 'prop-types';
import '../stylesheet/Display.css';

const Display = ({ result }) => (
  <div className="Display">{result == null ? 0 : result }</div>
);

Display.defaultProps = {
  result: '0',
};

Display.propTypes = {
  result: PropTypes.string,
};

export default Display;
