import { render } from '@testing-library/react';
import App from '../Components/App';

test('Board Div Exists', () => {
  render(<App />);
  const linkElement = document.getElementById("board");
  expect(linkElement).toBeInTheDocument();
});