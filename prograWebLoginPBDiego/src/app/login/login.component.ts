// login.component.ts

import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = ''; // Cambiado de 'username' a 'email'
  password: string = '';
  showErrorMessage: boolean = false;
  showPassword: boolean = false;

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit(): void {
    this.authService.login(this.email, this.password).subscribe(isAuthenticated => {
      if (isAuthenticated) {
        this.router.navigate(['/inicio']); // Redirige a la ruta de inicio
      } else {
        this.showErrorMessage = true; // Muestra el mensaje de error
      }
    });
  }

  closeErrorMessage(): void {
    this.showErrorMessage = false; // Oculta el mensaje de error
  }

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword; // Cambia la visibilidad de la contraseña
  }
}
