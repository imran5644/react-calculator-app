import React from 'react';
import renderer from 'react-test-renderer';
import App from './App';

it('Renders the Calculator page', () => {
    const calculator = renderer
    .create(<App />)
    .toJSON();
    expect(calculator).toMatchSnapshot();
  });