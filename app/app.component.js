"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var post_service_1 = require("./post.service");
var AppComponent = (function () {
    function AppComponent(_postService) {
        this._postService = _postService;
        this.title = "Angular App";
        this.imageUrl = "http://lorempixel.com/400/200";
        this.isLoading = true;
        //this._postService.createPost({ userId: 1, title: "a", body: "b" });
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._postService.getPosts()
            .subscribe(function (posts) {
            _this.isLoading = false;
            console.log(posts[0].id);
        });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "<h1> {{ title }} </h1>\n            <img src= \"{{imageUrl}}\" />\n            <div *ngIf=\"isLoading\">\n                <i class=\"fa fa-spinner fa-spin fa-3x\"></i>\n            </div>\n            ",
        /*
                  <i [class]=glyph (click)="onClick2()" ></i>
                  <button class="btn btn-primary" [class.active]="isActive"> Submit </button>
                  <button class="btn btn-primary" [style.backgroundColor]="isActive ? 'blue' : 'grey'"> Submit </button>
                  <button (click)="onClick($event)">Submit</button>
                  <input type="text" [value]="title" (input)="title = $event.target.value" />
                  <input type="text" [(ngModel)]="title" />
                  <courses></courses>
                  <authors></authors>
                  `,
       */
        providers: [post_service_1.PostService],
        styles: []
    }),
    __metadata("design:paramtypes", [post_service_1.PostService])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map