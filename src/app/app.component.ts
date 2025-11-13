import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormLoginComponent } from './pages/form-login/form-login.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormLoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'auth-user';
}
