import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: `./login.component.html`
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
