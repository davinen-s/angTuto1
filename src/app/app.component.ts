import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
 // templateUrl: './app.component.html',
 template: `
  <div> <h1> {{pageTitle}}</h1>
    <app-product-list></app-product-list>
  </div>
 `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pageTitle = 'Waza Product Management';
}
