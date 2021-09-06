import Header from '../Components/Header';
import { render, screen } from '@testing-library/react';

test('Header Div Exists', () => {
    render(<Header />);
    const linkElement = document.getElementById("header");
    expect(linkElement).toBeInTheDocument();
});

test('Title Paragraph Exists', () => {
    render(<Header />);
    const linkElement = document.getElementById("title");
    expect(linkElement).toBeInTheDocument();
});

test('Memory title is correct', () => {
    render(<Header />);
    const memoryTitle = screen.getByText(/GitHub Memory/i);
    expect(memoryTitle).toBeInTheDocument();
});