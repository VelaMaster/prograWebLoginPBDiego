import { AutocompleteAutoActiveFirstOptionExample } from './autocomplete/autocomplete.module';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'auto', component: AutocompleteAutoActiveFirstOptionExample }, // Cambia 'AutocompleteModule' por 'AutocompleteComponent'
  { path: '', redirectTo: '/autocomplete', pathMatch: 'full' } // Redirecciona a 'autocomplete' si la URL está vacía
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
