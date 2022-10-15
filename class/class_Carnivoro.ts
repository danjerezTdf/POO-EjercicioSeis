import { Mamifero } from './class_Mamifero'

export class Carnivoro extends Mamifero {
    private _typeCarnivoro: string;

    constructor(p_name: string,p_paws: number,_typrFood:string, p_status:boolean,p_typeCarnivoro:string) {
        super(p_name,p_paws,_typrFood,p_status)
        this._typeCarnivoro = p_typeCarnivoro;
    }
    public setTypeHerbivoro(_typeCarnivoro:string) {
        this._typeCarnivoro = _typeCarnivoro;
    }p

    public getTypeHerbivoro():string {
        return this._typeCarnivoro;
    }
    public toEat(): void {
        console.log("--------------------------------")
        console.log("EL Carnivoro esta Comiendo CARNE")   
        console.log("--------------------------------")     
    }
}