import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  template: '<app-login></app-login><app-home *ngIf="loggedIn"></app-home>'
})
export class AppComponent {
  loggedIn = false;
}