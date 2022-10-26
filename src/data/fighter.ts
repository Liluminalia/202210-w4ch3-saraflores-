import { Character } from './character';

export class Fighter extends Character {
    weapons: string;
    skill: number;

    constructor(
        id: number,
        name: string,
        family: string,
        age: number,
        weapons: string,
        skill: number
    ) {
        super(id, name, family, age);
        this.id = id;
        this.weapons = weapons;
        this.skill = skill;
        this.message = 'Primero pego y luego pregunto.';
    }
}
