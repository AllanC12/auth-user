import { Routes } from '@angular/router';
import { FormLoginComponent } from './pages/form-login/form-login.component';
import { FormRegisterComponent } from './pages/register/form-register/form-register.component';

export const routes: Routes = [ 
  {path: '', component: FormLoginComponent},
  {path: 'register', component: FormRegisterComponent}
];
