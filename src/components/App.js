import ButtonPanel from './ButtonPanel';
import Display from './Display';
import calculate from '../logic/calculate';

calculate(4, 5, '+');

const App = () => (
  <>
    <Display />
    <ButtonPanel />
  </>
);

export default App;
