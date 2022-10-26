import { Character } from './character';
import { Fighter } from './fighter';
import { King } from './king';
import { Squire } from './squire';

export class Assessor extends Character {
    boss: King | Fighter | Squire | null;
    constructor(name: string, family: string, age: number) {
        super(name, family, age);
        this.boss = null;
        this.message = 'No sé por qué, pero creo que voy a morir pronto.';
    }
    hired(boss: King | Fighter | Squire | null) {
        this.boss = boss;
    }
}
