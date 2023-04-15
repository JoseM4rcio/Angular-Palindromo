import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PalindromoComponent } from './palindromo/palindromo.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    PalindromoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule, // Adicione esta linha
    // ...
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
