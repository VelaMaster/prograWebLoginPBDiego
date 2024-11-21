// src/app/filter/filter.component.ts

import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Character } from '../models/character.model'; // Importa la interfaz

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  estados: string[] = [];
  especies: string[] = [];

  selectedEstado: string = '';
  selectedEspecie: string = '';

  @Output() filtersChanged: EventEmitter<{ estado: string; especie: string }> = new EventEmitter();

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchEstados();
    this.fetchEspecies();
  }

  fetchEstados(): void {
    this.http.get<{ results: Character[] }>('https://rickandmortyapi.com/api/character').subscribe(
      (response) => {
        const characters = response.results;
        const uniqueEstados = Array.from(new Set(characters.map(char => char.status)));
        this.estados = uniqueEstados;
      },
      error => {
        console.error('Error al obtener estados:', error);
        this.estados = ['Alive', 'Dead', 'unknown']; // Valores predeterminados
      }
    );
  }

  fetchEspecies(): void {
    this.http.get<{ results: Character[] }>('https://rickandmortyapi.com/api/character').subscribe(
      (response) => {
        const characters = response.results;
        const uniqueEspecies = Array.from(new Set(characters.map(char => char.species)));
        this.especies = uniqueEspecies;
      },
      error => {
        console.error('Error al obtener especies:', error);
        this.especies = ['Human', 'Alien', 'Robot', 'Mythological Creature', 'Unknown']; // Valores predeterminados
      }
    );
  }

  onFilterChange(): void {
    this.filtersChanged.emit({
      estado: this.selectedEstado,
      especie: this.selectedEspecie
    });
  }

  resetFilters(): void {
    this.selectedEstado = '';
    this.selectedEspecie = '';
    this.onFilterChange();
  }
}
