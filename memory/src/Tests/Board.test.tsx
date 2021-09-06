import { render } from '@testing-library/react';
import Board from '../Components/App';

test('Board Div Exists', () => {
  render(<Board />);
  const linkElement = document.getElementById("board");
  expect(linkElement).toBeInTheDocument();
});

test('Board Div Exists', () => {
  render(<Board />);
  const linkElement = document.getElementById("internal-board");
  expect(linkElement).toBeInTheDocument();
});
