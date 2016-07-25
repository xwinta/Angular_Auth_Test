import { Component } from '@angular/core';
import {Auth} from './auth.service';
@Component({
  selector: 'home',
  template: `
    <h1>Welcome to EHealth - Angular 2 integration test app</h1>
    <h4 *ngIf="auth.authenticated()">You are logged in</h4>
    <h4 *ngIf="!auth.authenticated()">You are not logged in, please click 'Log in' button to login</h4>
  `
})

export class HomeComponent {
 constructor(private auth: Auth) {}
}

