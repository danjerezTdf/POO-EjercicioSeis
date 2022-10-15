"use strict";
exports.__esModule = true;
exports.Mamifero = void 0;
var Mamifero = /** @class */ (function () {
    function Mamifero(p_name, p_paws, p_food, p_status) {
        this._name = p_name;
        this._paws = p_paws;
        this._typeFood = p_food;
        this._status = p_status;
    }
    Mamifero.prototype.setName = function (name) {
        this._name = name;
    };
    Mamifero.prototype.getName = function () {
        return this._name;
    };
    Mamifero.prototype.setPaws = function (paws) {
        this._paws = paws;
    };
    Mamifero.prototype.getPaws = function () {
        return this._paws;
    };
    Mamifero.prototype.setTypeFood = function (string) {
        this._typeFood = string;
    };
    Mamifero.prototype.getTypeFood = function () {
        return this._typeFood;
    };
    Mamifero.prototype.setStatus = function (status) {
        this._status = status;
    };
    Mamifero.prototype.getStatus = function () {
        return this._status;
    };
    Mamifero.prototype.changeStatus = function (status) {
        if (this._status === true) {
            this._status = false;
            console.log("Mataste al Mamifero");
        }
        else {
            this._status = true;
            console.log("Reviviste al Mamifero");
        }
    };
    Mamifero.prototype.toEat = function () {
        console.log("El Mamifero Esta Comiendo");
    };
    return Mamifero;
}());
exports.Mamifero = Mamifero;
