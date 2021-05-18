import ButtonPanel from './ButtonPanel';
import Display from './Display';
import calculate from '../logic/calculate';
import React, { Component } from 'react';

calculate(4, 5, '+');

class App extends Component {
   constructor(props) {
     super(props);

     this.state = {
       total: null,
       next: null,
       operation: null,
     };
   }

   handleClick = buttonName => {
     this.setState = {
      ...this.state,
      operation: buttonName,
     };

     const { total, next } = this.state;

     calculate(total, next, buttonName);
   }

   render() {
     const { next, total } = this.state;
      return (
        <>
          <Display result = { next === null ? total : next } />
          <ButtonPanel handleClick = { this.handleClick }/>
        </>
      );
    }
  } 

export default App;