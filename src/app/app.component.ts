import {Component} from '@angular/core';
import { CarouselConfig } from 'ngx-bootstrap/carousel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [
    { provide: CarouselConfig, useValue: { interval: 4500, noPause: false } }
  ]
})

export class AppComponent {
  title = 'Firulais app';
}

