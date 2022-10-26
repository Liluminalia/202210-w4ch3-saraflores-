import React from 'react';
import { render, screen } from '@testing-library/react';
import { Card } from './card';

describe('Given Card component', () => {
    describe('When we render the component', () => {
        test('Then it should display "Joffrey Baratheon"', () => {
            render(<Card />);
            const element = screen.getByText(/Joffrey Baratheon/i);
            expect(element).toBeInTheDocument();
        });
        test('Then it should display "Daenerys Targaryen"', () => {
            render(<Card />);
            const element = screen.getByText(/Daenerys Targaryen/i);
            expect(element).toBeInTheDocument();
        });
        test('Then it should display "Jaime Lannister"', () => {
            render(<Card />);
            const element = screen.getByText(/Jaime Lannister/i);
            expect(element).toBeInTheDocument();
        });
        test('Then it should display "Joffrey Baratheon"', () => {
            render(<Card />);
            const element = screen.getByText(/Joffrey Baratheon/i);
            expect(element).toBeInTheDocument();
        });
        test('Then it should display "Joffrey Baratheon"', () => {
            render(<Card />);
            const element = screen.getByText(/Joffrey Baratheon/i);
            expect(element).toBeInTheDocument();
        });
        test('Then it should display "Joffrey Baratheon"', () => {
            render(<Card />);
            const element = screen.getByText(/Joffrey Baratheon/i);
            expect(element).toBeInTheDocument();
        });
    });
});
