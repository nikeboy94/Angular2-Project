import { Component } from '@angular/core';


@Component({
  selector: 'my-app',
  template: `<h1> {{ title }} </h1>
            <img src= "{{imageUrl}}" />
            <courses></courses>
            <authors></authors>
            `
})
export class AppComponent {
    title = "Angular App";
    imageUrl = "http://lorempixel.com/400/200"
}
