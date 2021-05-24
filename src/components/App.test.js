import React from 'react';
import renderer from 'react-test-renderer';
import App from './App';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

describe('Calculator', () => {
  it('Renders the Calculator page', () => {
    const calculator = renderer
    .create(<App />)
    .toJSON();
    expect(calculator).toMatchSnapshot();
  });
});

describe('Calculator component', () => {
  beforeEach(() => {
    render(<App />);
  })

  it('Adds two numbers', async () => {
    await userEvent.click(screen.getByText('3'));
    await userEvent.click(screen.getByText('0'));
    await userEvent.click(screen.getByText('0'));
    await userEvent.click(screen.getByText('+'));
    await userEvent.click(screen.getByText('2'));
    await userEvent.click(screen.getByText('0'));
    await userEvent.click(screen.getByText('0'));
    await userEvent.click(screen.getByText('='));
    const display = await screen.findByText(/500/);
    expect(display).toBeInTheDocument();
  });

  it('Substracts two numbers', async () => {
    await userEvent.click(screen.getByText('5'));
    await userEvent.click(screen.getByText('2'));
    await userEvent.click(screen.getByText('5'));
    await userEvent.click(screen.getByText('-'));
    await userEvent.click(screen.getByText('5'));
    await userEvent.click(screen.getByText('='));
    const display = await screen.findByText(/520/);
    expect(display).toBeInTheDocument();
  });

  it('Multiplies two numbers', async () => {
    await userEvent.click(screen.getByText('4'));
    await userEvent.click(screen.getByText('X'));
    await userEvent.click(screen.getByText('2'));
    await userEvent.click(screen.getByText('0'));
    await userEvent.click(screen.getByText('='));
    const display = await screen.findByText(/80/);
    expect(display).toBeInTheDocument();
  });

  it('Divides two numbers', async () => {
    await userEvent.click(screen.getByText('2'));
    await userEvent.click(screen.getByText('0'));
    await userEvent.click(screen.getByText('÷'));
    await userEvent.click(screen.getByText('2'));
    await userEvent.click(screen.getByText('='));
    const display = await screen.findByText(/10/);
    expect(display).toBeInTheDocument();
  });

  it('Turns number in percentage', async () => {
    await userEvent.click(screen.getByText('8'));
    await userEvent.click(screen.getByText('%'));
    const display = await screen.findByText(/0.08/);
    expect(display).toBeInTheDocument();
  });

  it('Turns positive number into negative number', async () => {
    await userEvent.click(screen.getByText('7'));
    await userEvent.click(screen.getByText('+/-'));
    const display = await screen.findByText(/-7/);
    expect(display).toBeInTheDocument();
  });

  it('Turns negative number into positive number', async () => {
    await userEvent.click(screen.getByText('7'));
    await userEvent.click(screen.getByText('6'));
    await userEvent.click(screen.getByText('+/-'));
    await userEvent.click(screen.getByText('+/-'));
    const display = await screen.findByText(/76/);
    expect(display).toBeInTheDocument();
  });

  it('Clears the display', async () => {
    await userEvent.click(screen.getByText('8'));
    await userEvent.click(screen.getByText('0'));
    await userEvent.click(screen.getByText('AC'));
    expect(screen.queryByText('80')).toBeNull();
  });  
})