import { Component } from '@angular/core';
import { PostService } from './post.service';
import { OnInit } from '@angular/core';


@Component({
  selector: 'my-app',
  template: `<h1> {{ title }} </h1>
            <img src= "{{imageUrl}}" />
            <div *ngIf="isLoading">
                <i class="fa fa-spinner fa-spin fa-3x"></i>
            </div>
            `,
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
  providers: [PostService],
  styles: []
})
export class AppComponent implements OnInit {
    title = "Angular App";
    imageUrl = "http://lorempixel.com/400/200";
    isLoading = true;

    constructor(private _postService: PostService) {
        //this._postService.createPost({ userId: 1, title: "a", body: "b" });
    }

    ngOnInit() {
        this._postService.getPosts()
            .subscribe(posts => {
                this.isLoading = false;
                console.log(posts[0].id);
            });
    }

    /****old stuff****

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
    **********/
}
