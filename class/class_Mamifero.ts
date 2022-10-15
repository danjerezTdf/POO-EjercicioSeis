export class Mamifero {
    protected _name: string;
    protected _paws: number;
    protected _typeFood: string;
    protected _status: boolean;

    constructor (p_name: string, p_paws: number, p_food: string, p_status: boolean){
        this._name = p_name;
        this._paws = p_paws;
        this._typeFood = p_food;
        this._status = p_status;
    }

    setName (name: string){
        this._name = name;
    }
    getName():string{
        return this._name;
    }
    setPaws (paws: number){
        this._paws = paws;
    }
    getPaws():number{
        return this._paws;
    }
    setTypeFood(string){
        this._typeFood = string;
    }
    getTypeFood():string{
        return this._typeFood;
    }
    setStatus (status:boolean){
        this._status = status;
    }
    getStatus():boolean{
        return this._status;
    }
    changeStatus (status:boolean){
        if(this._status === true){
            this._status = false;
            console.log("Mataste al Mamifero")
        }else{
            this._status = true;
            console.log("Reviviste al Mamifero")
        }
    }
    toEat(){
        console.log("El Mamifero Esta Comiendo")
    }

}