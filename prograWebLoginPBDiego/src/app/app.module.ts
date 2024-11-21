// app.module.ts

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Importa FormsModule
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router'; // Importar RouterModule y Routes
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { InicioComponent } from './inicio/inicio.component';
import { SearchComponent } from './search/search.component'; // Importa SearchComponent
import { FilterComponent } from './filter/filter.component'; // Importa FilterComponent
import { AuthInterceptor } from './auth.interceptor'; // Importa AuthInterceptor

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'inicio', component: InicioComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Ruta por defecto
  { path: '**', redirectTo: '/login' } // Ruta comodín para rutas no encontradas
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InicioComponent,
    SearchComponent,
    FilterComponent // Declara FilterComponent
    // Otros componentes
  ],
  imports: [
    BrowserModule,
    FormsModule, // Asegura que FormsModule esté importado
    HttpClientModule,
    RouterModule.forRoot(routes) // Configura RouterModule con las rutas
    // Otros módulos
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
    // Otros proveedores
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
