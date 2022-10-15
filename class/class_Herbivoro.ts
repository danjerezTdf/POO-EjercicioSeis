import { Mamifero } from './class_Mamifero'

export class Herbivoro extends Mamifero {
    private _typeHerbivoro: string;

    constructor(p_name: string,p_paws: number,_typrFood:string, p_status:boolean,p_typeHerbivoro:string) {
        super(p_name,p_paws,_typrFood,p_status)
        this._typeHerbivoro = p_typeHerbivoro
    }
    public setTypeHerbivoro(_typeHerbivoro:string) {
        this._typeHerbivoro = _typeHerbivoro;
    }

    public getTypeHerbivoro():string {
        return this._typeHerbivoro;
    }
    public toEat(): void {
        console.log("----------------------------------")
        console.log("EL Herbivoro esta Comiendo PLANTAS");
        console.log("----------------------------------")
    }
}