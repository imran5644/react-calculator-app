import PropTypes from 'prop-types';
import '../stylesheet/Display.css';

const Display = ({ result }) => {
  const { total, next, operation } = result;
  let totalDisplay = total;
  let nextDisplay = next;
  if (totalDisplay !== null && String(totalDisplay).indexOf('-') !== -1) {
    totalDisplay = `(${total})`;
  }
  if (nextDisplay !== null && String(nextDisplay).indexOf('-') !== -1) {
    nextDisplay = `(${next})`;
  }
  const display = `${totalDisplay == null ? '' : totalDisplay}
    ${operation == null ? '' : operation}
    ${nextDisplay == null ? '' : nextDisplay}`;
  return (
    <div className="Display">{display == null ? 0 : display}</div>
  );
};

Display.propTypes = {
  result: PropTypes.shape({
    total: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    next: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    operation: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  }).isRequired,
};

export default Display;
