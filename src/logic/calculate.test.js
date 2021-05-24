import calculate from './calculate';

describe('Test the calculate file', () => {
  
      it('Adds two numbers', () => {
        let result = calculate({
          total: '10', next: '100', operation: '+', lastClicked: '0'
        }, '+');
        expect(result).toEqual({ total: '110', next: null, operation: '+' });
      });
  
      it('Multiplies two numbers', () => {
        let result = calculate({
          total: '10', next: '100', operation: 'X', lastClicked: '0'
        }, 'X');
        expect(result).toEqual({ total: '1000', next: null, operation: 'X' });
      });
  
      it('Divides two numbers', () => {
        let result = calculate({
          total: '1000', next: '10', operation: '÷', lastClicked: '0'
        }, '÷');
        expect(result).toEqual({ total: '100', next: null, operation: '÷' });
      });
  
      it('Handles division by 0', () => {
        let result = calculate({
          total: '1000', next: '0', operation: '÷', lastClicked: '0'
        }, '÷');
        expect(result).toEqual({ total: null, next: null, operation: '÷' });
      });
  
      it('Converts positive number to negative', () => {
        let result = calculate({
          total: '1000', next: '10', operation: '+/-', lastClicked: '0'
        }, '+/-');
        expect(result).toEqual({ total: '1000', next: -10, operation: '+/-' });
      });
  
      it('Converts negative number to positive', () => {
        let result = calculate({
          total: null, next: '-1000', operation: '+/-', lastClicked: '0'
        }, '+/-');
        expect(result).toEqual({ total: null, next: 1000, operation: '+/-' });
      });
  
    it('Applies % on the number', () => {
        let result = calculate({
          total: null, next: '1', operation: '%', lastClicked: 1
        }, '%');
        expect(result).toEqual({total: '0.01', next: null, operation: '%'});
      });
  
      it('Clears the calculate object when AC is pressed', () => {
        let result = calculate({
          total:'1000', next:'10', operation: 'AC', lastClicked: '0'
        }, 'AC');
        expect(result).toEqual({total: null, next: null, operation: null});
      })

      it('Concatenate numbers', () => {
        let result = calculate({
          total:null, next: '1', operation:null, lastClicked:null,
        }, '2');
        expect(result).toEqual({total: null, next: '12', operation: null})
      });


});