"use strict";
exports.__esModule = true;
var class_Herbivoro_1 = require("./class/class_Herbivoro");
var class_Carnivoro_1 = require("./class/class_Carnivoro");
var class_Omnivoro_1 = require("./class/class_Omnivoro");
// Instacion distintas clases de mamiferos 
var HerbivoroUno = new class_Herbivoro_1.Herbivoro("Vaca", 4, "Pasto", true, "Rizófagos");
var CarnivoroUno = new class_Carnivoro_1.Carnivoro("Leon", 4, "Carne", true, "Carnívoros estrictos");
var OmnivoroUno = new class_Omnivoro_1.Omnivoro("Hombre", 2, "Milanesa con Pure", true, "Estricto");
//uso metodo comer con polimorfismo
HerbivoroUno.toEat();
CarnivoroUno.toEat();
OmnivoroUno.toEat();
