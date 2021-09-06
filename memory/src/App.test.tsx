import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('Board Div Exists', () => {
  render(<App />);
  const linkElement = document.getElementById("board");
  expect(linkElement).toBeInTheDocument();
});

test('Header Div Exists', () => {
  render(<App />);
  const linkElement = document.getElementById("header");
  expect(linkElement).toBeInTheDocument();
});
