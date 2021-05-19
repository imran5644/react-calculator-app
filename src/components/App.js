import React, { Component } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      total: null,
      next: null,
      operation: null,
      lastClicked: null,
    };
  }

  handleClick = (buttonName) => {
    this.setState(({
      total, next, operation, lastClicked,
    }) => calculate({
      total, next, operation, lastClicked,
    }, buttonName));
    this.setState({ lastClicked: buttonName });
  }

  render() {
    const { next, total } = this.state;
    return (
      <>
        <Display result={next === null ? total : next} />
        <ButtonPanel clickHandler={this.handleClick} />
      </>
    );
  }
}

export default App;
