import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  articulos = [{texto:'texto1', numero:1},
           {texto:'texto2', numero:2}];
}