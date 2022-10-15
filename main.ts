import { Herbivoro } from './class/class_Herbivoro'
import { Carnivoro } from './class/class_Carnivoro'
import { Omnivoro } from './class/class_Omnivoro'

// Instacion distintas clases de mamiferos 

let HerbivoroUno = new Herbivoro("Vaca",4,"Pasto",true,"Rizófagos");
let CarnivoroUno = new Carnivoro("Leon",4,"Carne",true,"Carnívoros estrictos")
let OmnivoroUno = new Omnivoro ("Hombre",2,"Milanesa con Pure",true,"Estricto")

//uso metodo comer con polimorfismo

HerbivoroUno.toEat();

CarnivoroUno.toEat();

OmnivoroUno.toEat();
