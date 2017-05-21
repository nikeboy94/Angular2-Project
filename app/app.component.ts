import { Component } from '@angular/core';


@Component({
  selector: 'my-app',
  template: `<h1> {{ title }} </h1>
            <img src= "{{imageUrl}}" />
            <i [class]=glyph (click)="onClick2()" ></i>
            <button class="btn btn-primary" [class.active]="isActive"> Submit </button>
            <button class="btn btn-primary" [style.backgroundColor]="isActive ? 'blue' : 'grey'"> Submit </button>
            <button (click)="onClick($event)">Submit</button>
            <input type="text" [value]="title" (input)="title = $event.target.value" />
            <input type="text" [(ngModel)]="title" />
            <courses></courses>
            <authors></authors>
            `,
  styles: []
})
export class AppComponent {
    title = "Angular App";
    imageUrl = "http://lorempixel.com/400/200"
    isActive = false;
    isActive2 = false;
    glyph = "glyphicon glyphicon-star";

    onClick2() {
        if (this.glyph == "glyphicon glyphicon-star")
            this.glyph = "glyphicon glyphicon-star-empty"
        else
            this.glyph = "glyphicon glyphicon-star"
    }

    onClick($event) {
        console.log("Clicked", $event);
    }
}
