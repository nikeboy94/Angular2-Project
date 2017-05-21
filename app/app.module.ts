import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent }   from './app.component';
import { CoursesComponent } from './courses.component';
import { AuthorsComponent } from './authors.component';
import { AuthorService } from './author.service';
import { AutoGrowDirective } from './auto-grow.directive';


@NgModule({
  imports: [BrowserModule, FormsModule, HttpModule, JsonpModule],
  declarations: [
      AppComponent,
      CoursesComponent,
      AuthorsComponent,
      AutoGrowDirective
  ],
  providers: [AuthorService],
  bootstrap: [AppComponent]

})

export class AppModule { }
