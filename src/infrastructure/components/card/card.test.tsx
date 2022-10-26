import React from 'react';
import { render, screen } from '@testing-library/react';
import { Card } from './card';
import { characters } from '../../../data/characters';

describe('Given Card component', () => {
    describe('When we render the component', () => {
        //_----------------------NOMBRES---------------------------

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
        test('Then it should display "Tyrion Lannister"', () => {
            render(<Card />);
            const element = screen.getByText(/Tyrion Lannister/i);
            expect(element).toBeInTheDocument();
        });
        test('Then it should display "Bronn BlackWaters"', () => {
            render(<Card />);
            const element = screen.getByText(/Bronn BlackWaters/i);
            expect(element).toBeInTheDocument();
        });

        //---------------------IMAGENES-------------------------------

        test('Then it should display a picture of Joffrey Baratheon', () => {
            render(<Card />);
            const element = screen.getByAltText(/Joffrey Baratheon/i);
            expect(element).toBeInTheDocument();
        });
        test('Then it should display a picture of Daenerys Targaryen', () => {
            render(<Card />);
            const element = screen.getByAltText(/Daenerys Targaryen/i);
            expect(element).toBeInTheDocument();
        });
        test('Then it should display a picture of Jaime Lannister', () => {
            render(<Card />);
            const element = screen.getByAltText(/Jaime Lannister/i);
            expect(element).toBeInTheDocument();
        });
        test('Then it should display a picture of Tyrion Lannister', () => {
            render(<Card />);
            const element = screen.getByAltText(/Tyrion Lannister/i);
            expect(element).toBeInTheDocument();
        });
        test('Then it should display a picture', () => {
            render(<Card />);
            const element = screen.getByAltText(/Bronn BlackWaters/i);
            expect(element).toBeInTheDocument();
        });

        //---------------------ALL together-------------------------------
        // test comentado de momento
        // test('Then it should display pictures', () => {
        //     render(<Card />);
        //     const element = screen.getByRole('img');
        //     expect(element).toBeInTheDocument();
        // });
        // const cards= characters.length
    });
});
