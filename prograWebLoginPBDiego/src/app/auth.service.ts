// auth.service.ts

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject, of } from 'rxjs';
import { map, catchError, switchMap } from 'rxjs/operators';

export interface User {
  id: number;
  name: string;
  email: string;
  avatar: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loginUrl = 'https://api.escuelajs.co/api/v1/auth/login';
  private profileUrl = 'https://api.escuelajs.co/api/v1/auth/profile'; // Asegúrate de que esta sea la URL correcta para obtener el perfil

  private userSubject = new BehaviorSubject<User | null>(null);
  public user$ = this.userSubject.asObservable();

  constructor(private http: HttpClient) {
    const token = localStorage.getItem('access_token');
    if (token) {
      this.getUserProfile().subscribe(
        user => {
          this.userSubject.next(user);
        },
        error => {
          console.error('Error al obtener el perfil del usuario:', error);
          this.logout();
        }
      );
    }
  }

  login(email: string, password: string): Observable<boolean> {
    return this.http.post<{ access_token: string }>(this.loginUrl, { email, password })
      .pipe(
        switchMap(response => {
          if (response && response.access_token) {
            localStorage.setItem('access_token', response.access_token);
            return this.getUserProfile();
          }
          return of(null);
        }),
        map(user => {
          if (user) {
            this.userSubject.next(user);
            return true;
          }
          return false;
        }),
        catchError(error => {
          console.error('Error en el proceso de login:', error);
          return of(false);
        })
      );
  }

  getUserProfile(): Observable<User> {
    const token = localStorage.getItem('access_token');
    if (!token) {
      return of(null as any); // Retorna un observable de null si no hay token
    }

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    return this.http.get<User>(this.profileUrl, { headers })
      .pipe(
        catchError(error => {
          console.error('Error al obtener el perfil del usuario:', error);
          return of(null as any);
        })
      );
  }

  logout(): void {
    localStorage.removeItem('access_token');
    this.userSubject.next(null);
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('access_token');
  }
}
