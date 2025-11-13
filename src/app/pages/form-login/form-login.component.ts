import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import {Router} from '@angular/router'
import { RouterModule } from '@angular/router';

interface ResponseLogin{
  access_token: string;
}


@Component({
  selector: 'app-form-login',
  standalone: true,
  imports: [HttpClientModule, ReactiveFormsModule, RouterModule],
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.scss']
})
export class FormLoginComponent {
  constructor(private readonly http: HttpClient, private router: Router) {}

  formLogin = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  })

  login(event: Event): void{
    event.preventDefault()
    const url = 'http://localhost:3000/auth/login'
    const data = {
      email: this.formLogin.value.email,
      password: this.formLogin.value.password
    }

    const result = this.http.post<ResponseLogin>(url, data).subscribe({
      next: (response) => {
         localStorage.setItem('token', response.access_token)
      },
      error: (error) => {
        console.error('Login failed', error)
      }
    })
  }
}
