import { Injectable } from '@angular/core';
import { LoginDTO } from '../dto/login.dto';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private url_base = environment.apiUrl;
  constructor(private http: HttpClient) {}

  login(data: LoginDTO): Observable<LoginDTO> {
    return this.http
      .post<LoginDTO>(`${this.url_base}/auth/login`, data)
      .pipe(catchError(() => throwError('Login failed')));
  }
}
