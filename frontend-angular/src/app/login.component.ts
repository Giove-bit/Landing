import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  template: '<input [(ngModel)]="username" placeholder="Username">' +
            '<input [(ngModel)]="password" type="password" placeholder="Password">' +
            '<button (click)="login()">Login</button>'
})
export class LoginComponent {
  username = '';
  password = '';
  constructor(private http: HttpClient) {}
  login() {
    this.http.post('http://localhost:8080/api/auth/login', {
      username: this.username,
      password: this.password
    }).subscribe((res: any) => {
      localStorage.setItem('token', res.token);
      alert('Login success!');
    }, err => alert('Login failed'));
  }
}