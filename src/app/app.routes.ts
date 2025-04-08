import { Routes } from '@angular/router';
import { FormLoginComponent } from './components/form-login/form-login.component';
import { FormRegisterComponent } from './components/form-register/form-register.component';

export const routes: Routes = [ 
  {path: '', component: FormLoginComponent},
  {path: 'register', component: FormRegisterComponent}
];
