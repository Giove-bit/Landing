import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})

export class HomeComponent {

constructor(private http: HttpClient, private router: Router) {}

scopriDiPiu() {
    this.http.post('http://localhost:8080/api/test/posta', {
      user: 'giove'
    }).subscribe((res: any) => {
      localStorage.setItem('token', res.token);
    }, err => alert('Error: failed'));
  }
}