import { Character } from './character';

export class Fighter extends Character {
    weapons: string;
    skill: number;

    constructor(
        name: string,
        family: string,
        age: number,
        weapons: string,
        skill: number
    ) {
        super(name, family, age);
        this.weapons = weapons;
        this.skill = skill;
        this.message = 'Primero pego y luego pregunto.';
    }
}
