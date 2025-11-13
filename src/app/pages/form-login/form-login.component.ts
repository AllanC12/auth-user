import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { LoginService } from './services/login.service';

interface ResponseLogin {
  access_token: string;
}

@Component({
  selector: 'app-form-login',
  standalone: true,
  providers: [LoginService, HttpClient],
  imports: [HttpClientModule, ReactiveFormsModule, RouterModule],
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.scss'],
})
export class FormLoginComponent {
  constructor(
    private router: Router,
    private loginService: LoginService
  ) {}

  formLogin = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  login(event: Event): void {
    event.preventDefault();
    const data = {
      email: this.formLogin.value.email!,
      password: this.formLogin.value.password!,
    };
    this.loginService.login(data).subscribe({
      next: (response: any) => {
        console.log(response);
        localStorage.setItem('access_token', response.access_token);
        this.router.navigate(['/home']);
      },
      error: (error: any) => {
        console.error('Login failed', error);
      },
    });
  }
}
