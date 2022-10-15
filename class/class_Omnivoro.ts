import { Mamifero } from './class_Mamifero'

export class Omnivoro extends Mamifero {
    private _typeOmnivoro: string;

    constructor(p_name: string,p_paws: number,_typrFood:string, p_status:boolean,p_typeOmnivoro:string) {
        super(p_name,p_paws,_typrFood,p_status)
        this._typeOmnivoro = p_typeOmnivoro;
    }
    public setTypeHerbivoro(_typeOmnivoro:string) {
        this._typeOmnivoro = _typeOmnivoro;
    }p

    public getTypeHerbivoro():string {
        return this._typeOmnivoro;
    }
    public toEat(): void {
        console.log("EL Herbivoro esta Comiendo De TODO")        
    }
}