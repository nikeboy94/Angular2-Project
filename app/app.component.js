"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
        this.title = "Angular App";
        this.imageUrl = "http://lorempixel.com/400/200";
        this.isActive = false;
        this.isActive2 = false;
        this.glyph = "glyphicon glyphicon-star";
    }
    AppComponent.prototype.onClick2 = function () {
        if (this.glyph == "glyphicon glyphicon-star")
            this.glyph = "glyphicon glyphicon-star-empty";
        else
            this.glyph = "glyphicon glyphicon-star";
    };
    AppComponent.prototype.onClick = function ($event) {
        console.log("Clicked", $event);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "<h1> {{ title }} </h1>\n            <img src= \"{{imageUrl}}\" />\n            <i [class]=glyph (click)=\"onClick2()\" ></i>\n            <button class=\"btn btn-primary\" [class.active]=\"isActive\"> Submit </button>\n            <button class=\"btn btn-primary\" [style.backgroundColor]=\"isActive ? 'blue' : 'grey'\"> Submit </button>\n            <button (click)=\"onClick($event)\">Submit</button>\n            <input type=\"text\" [value]=\"title\" (input)=\"title = $event.target.value\" />\n            <input type=\"text\" [(ngModel)]=\"title\" />\n            <courses></courses>\n            <authors></authors>\n            ",
        styles: []
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map