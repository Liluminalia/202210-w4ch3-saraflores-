import { Assessor } from './assessor';
import { Squire } from './squire';

export interface ICharacter {
    id: number;
    name: string;
    age: number;
    family: string;
    lifeStatus: boolean;
    message: string;
}
export interface IFullCharacter {
    id: number;
    name: string;
    age: number;
    family: string;
    lifeStatus: boolean;
    message: string;
    death: () => void;
    communicate: () => string;
}
//interdace -> se parece mucho a una clase, son los tipos de valores de cada clase, solo se pueden usar para tipar o para implementar.nunca para instanciar
export class Character implements IFullCharacter {
    id: number;
    name: string;
    family: string;
    age: number;
    lifeStatus: boolean;
    message: string;
    assessor?: Assessor | null;
    squiring?: Squire | null;

    static serie = 'Game of Thrones';
    constructor(id: number, name: string, family: string, age: number) {
        this.id = id;
        this.name = name;
        this.family = family;
        this.age = age;
        this.lifeStatus = true;
        this.message = '';
        this.assessor = null;
    }
    communicate() {
        return this.message;
    }
    death() {
        this.lifeStatus = false;
    }
}
// hardcodear -> poniendo algo de manera literal y no guardandolo con una variable, forzamos a que no se pueda cambiar.
//metodos age, communicate, die
// propiedades -> message
//los objetos son instancias de las clases
