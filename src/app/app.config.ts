import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, Routes } from '@angular/router';

import { routes } from './app.routes';
import { FormLoginComponent } from './components/form-login/form-login.component';

const AppRoutes: Routes = [
  {
    path: '',
    component: FormLoginComponent
  }
]

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes)]
};
