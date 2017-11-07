import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { NgModule , NO_ERRORS_SCHEMA } from '@angular/core';
// STYLES IMPORTS
import { MDBBootstrapModule} from 'angular-bootstrap-md';

import { AppComponent } from './app.component';
import { RegistroComponent } from './registro/registro.component';
// NGX MODULES
import { CarouselModule } from 'ngx-bootstrap/carousel';

@NgModule({
  declarations: [
    AppComponent,
    RegistroComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CarouselModule.forRoot()
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
