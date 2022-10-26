import { Character } from './character.js';
import { King } from './king.js';
import { Fighter } from './fighter.js';
import { Assessor } from './assessor.js';
import { Squire } from './squire.js';

export const Characters = [
    new King('Joffrey', 'Baratheon', 13, 1),
    new Fighter('Daenerys', 'Targaryen', 23, 'Dragons', 8),
    new Fighter('Jaime', 'Lannister', 37, 'sword', 6),
    new Assessor('Tyrion', 'Lannister', 33),
    new Squire('Bronn', 'BlackWaters', 45, 5),
];
(Characters[1] as Assessor).hired(<Fighter>Characters[0]);
// console.log(characters); //importar al ficher html
