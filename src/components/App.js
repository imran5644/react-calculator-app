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

   render() {
      return (
        <>
          <Display />
          <ButtonPanel />
        </>
      );
    }
  } 

export default App;
