import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://api.escuelajs.co/api/v1/auth/login';

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<boolean> {
    return this.http.post<{ access_token: string }>(this.apiUrl, { email, password })
      .pipe(
        map(response => {
          if (response && response.access_token) {
            localStorage.setItem('access_token', response.access_token);
            return true;
          }
          return false;
        }),
        catchError(() => {
          return [false];
        })
      );
  }

  logout(): void {
    localStorage.removeItem('access_token');
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('access_token');
  }
}
