"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Omnivoro = void 0;
var class_Mamifero_1 = require("./class_Mamifero");
var Omnivoro = /** @class */ (function (_super) {
    __extends(Omnivoro, _super);
    function Omnivoro(p_name, p_paws, _typrFood, p_status, p_typeOmnivoro) {
        var _this = _super.call(this, p_name, p_paws, _typrFood, p_status) || this;
        _this._typeOmnivoro = p_typeOmnivoro;
        return _this;
    }
    Omnivoro.prototype.setTypeHerbivoro = function (_typeOmnivoro) {
        this._typeOmnivoro = _typeOmnivoro;
    };
    Omnivoro.prototype.getTypeHerbivoro = function () {
        return this._typeOmnivoro;
    };
    Omnivoro.prototype.toEat = function () {
        console.log("----------------------------------");
        console.log("EL Omnivoro esta Comiendo De TODO");
        console.log("----------------------------------");
    };
    return Omnivoro;
}(class_Mamifero_1.Mamifero));
exports.Omnivoro = Omnivoro;
