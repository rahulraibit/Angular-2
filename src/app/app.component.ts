import { Component, Inject } from '@angular/core';
// import {MailService} from './mail.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template: `
  <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'Hello World';
  constructor() {

  }
}
