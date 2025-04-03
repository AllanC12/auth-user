import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-form-login',
  standalone: true,
  imports: [HttpClientModule, ReactiveFormsModule],
  templateUrl: './form-login.component.html',
  styleUrl: './form-login.component.scss'
})
export class FormLoginComponent {
  constructor(private readonly http: HttpClient) {}

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

    const result = this.http.post(url, data).subscribe({
      next: (response) => {
        console.log('Login successful', response)
      },
      error: (error) => {
        console.error('Login failed', error)
      }
    })
  }
}
