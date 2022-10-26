import { King } from './king';
import { Fighter } from './fighter';
import { Assessor } from './assessor';
import { Squire } from './squire';

export const characters = [
    new King(1, 'Joffrey', 'Baratheon', 13, 1),
    new Fighter(2, 'Daenerys', 'Targaryen', 23, 'Dragons', 8),
    new Fighter(3, 'Jaime', 'Lannister', 37, 'sword', 6),
    new Assessor(4, 'Tyrion', 'Lannister', 33),
    new Squire(5, 'Bronn', 'BlackWaters', 45, 5),
];
