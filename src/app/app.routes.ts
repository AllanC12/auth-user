import { Routes } from '@angular/router';
import { FormLoginComponent } from './pages/form-login/form-login.component';
import { FormRegisterComponent } from './pages/register/form-register/form-register.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [ 
  {path: '', component: FormLoginComponent},
  {path: 'register', component: FormRegisterComponent},
  {path:'home', component: HomeComponent}
];
