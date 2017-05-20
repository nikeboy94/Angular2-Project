import { Component } from '@angular/core';
import { AuthorService } from './author.service';

@Component({
    selector: 'authors',
    template: `
        <h2> Authors </h2>
        {{ description }}
        <ul>
            <li *ngFor = "let a of authors"> {{ a }} </li>
        </ul>
        `
   //providers: [AuthorService] <- Code not needed since it is provided for the whole module in app.module.ts
})

export class AuthorsComponent {
    description = "A list of authors";
    authors: string[];

    constructor(authorService: AuthorService) {
        this.authors = authorService.getAuthors();
    }
}