import React, { Component } from 'react';
import ButtonPanel from './ButtonPanel';
import Display from './Display';
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
    const { total, next, operation, lastClicked } = this.state;
    const operations = ['+', '-', '÷', 'X', '='];
    
     if (buttonName === '.') {
      this.setState({
        next: next == null ? `0${buttonName}` : next + buttonName,
      });
    }
     else if (buttonName in ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']) {
       this.setState = ({
         next: next == null ? buttonName : next + buttonName,
       });
     } else {
       switch (buttonName) {
         case '+':
         case '-':
         case 'X':
         case '÷':
         

           case '=':
            if (total === null || total === 'undefined') {
              this.setState({
                total: next,
                next: null,
                operation: buttonName,
              });
            } else if (!operations.includes(lastClicked)) {
           this.setState(calculate({ total, next, operation}, buttonName));
            }
           break;

         default:
          this.setState(calculate({ total, next, operation }, buttonName));
       }
     }
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
