import { Character } from './character';

export class King extends Character {
    kingdomYears: number;

    constructor(
        id: number,
        name: string,
        family: string,
        age: number,
        kingdomYears: number
    ) {
        super(id, name, family, age);
        this.id = id;
        this.kingdomYears = kingdomYears;
        this.message = 'Vais a morir todos.';
    }
}
