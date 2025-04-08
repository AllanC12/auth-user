import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule  } from '@angular/forms';

@Component({
  selector: 'app-form-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.scss']
})
export class FormRegisterComponent {

  formRegister = new FormGroup({
    name: new FormControl<any>(''),
    birthAt: new FormControl<any>(''),
    email: new FormControl<any>(''),
    password: new FormControl<any>('')
  })

}
