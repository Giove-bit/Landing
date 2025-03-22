import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  template: `
    <div style="max-width: 400px; margin: 100px auto;">
      <h2>Login</h2>
      <mat-form-field appearance="fill" style="width: 100%;">
        <mat-label>Username</mat-label>
        <input matInput [(ngModel)]="username">
      </mat-form-field>
      <mat-form-field appearance="fill" style="width: 100%;">
        <mat-label>Password</mat-label>
        <input matInput [(ngModel)]="password" type="password">
      </mat-form-field>
      <button mat-raised-button color="primary" (click)="login()">Login</button>
    </div>
  `
})
export class LoginComponent {
  username = '';
  password = '';

  constructor(private http: HttpClient, private router: Router) {}

  login() {
    this.http.post('http://localhost:8080/api/auth/login', {
      username: this.username,
      password: this.password
    }).subscribe((res: any) => {
      localStorage.setItem('token', res.token);
      this.router.navigate(['/home']);
    }, err => alert('Login failed'));
  }
}
