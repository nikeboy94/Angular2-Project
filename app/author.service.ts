import { Injectable } from '@angular/core';

@Injectable()
export class AuthorService {
    getAuthors(): string[] {
        return ["J.K Rowling", "J.R.R Martin", "Tolken"];
    } 
}
