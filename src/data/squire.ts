import { Character } from './character';
import { Fighter } from './fighter';

export class Squire extends Character {
    patheticLevel: number;

    constructor(
        name: string,
        family: string,
        age: number,
        patheticLevel: number
    ) {
        super(name, family, age);
        this.patheticLevel = patheticLevel;
        this.message = 'Soy un loser.';
    }
}
