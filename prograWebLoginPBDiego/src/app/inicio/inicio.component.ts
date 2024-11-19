import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  allCharacters: any[] = []; // Todos los personajes cargados desde la API
  displayedCharacters: any[] = []; // Personajes a mostrar en la tabla
  currentApiPage: number = 1; // Página actual de la API
  currentComponentPage: number = 1; // Página actual del componente (10 por página)
  totalApiPages: number = 1;
  totalComponentPages: number = 1;
  pageSize: number = 10; // Número de filas por página
  searchText: string = '';
  selectedCharacter: any = null;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadApiPage(this.currentApiPage);
  }

  loadApiPage(page: number): void {
    const url = `https://rickandmortyapi.com/api/character?page=${page}`;
    this.http.get<any>(url).subscribe((response) => {
      this.allCharacters = response.results;
      this.totalApiPages = response.info.pages;
      this.calculateComponentPages();
      this.updateDisplayedCharacters();
    });
  }

  calculateComponentPages(): void {
    // Cada página de la API tiene 20 personajes, y queremos 10 por página del componente
    // Por lo tanto, cada página de la API corresponde a 2 páginas del componente
    this.totalComponentPages = this.totalApiPages * 2;
  }

  updateDisplayedCharacters(): void {
    // Determinar qué página de la API corresponde a la página actual del componente
    this.currentApiPage = Math.ceil(this.currentComponentPage / 2);

    // Cargar la página de la API si no está cargada
    if (!this.allCharacters || this.allCharacters.length === 0 || this.currentApiPage !== this.currentApiPage) {
      this.loadApiPage(this.currentApiPage);
      return;
    }

    // Calcular el índice de inicio y fin para la paginación interna
    const isFirstHalf = this.currentComponentPage % 2 !== 0;
    const startIndex = isFirstHalf ? 0 : 10;
    const endIndex = isFirstHalf ? 10 : 20;

    this.displayedCharacters = this.allCharacters.slice(startIndex, endIndex);
  }

  goToPage(page: number): void {
    if (page >= 1 && page <= this.totalComponentPages) {
      this.currentComponentPage = page;
      this.updateDisplayedCharacters();
    }
  }

  logout(): void {
    localStorage.removeItem('access_token');
    window.location.href = '/';
  }

  viewDetails(character: any): void {
    this.selectedCharacter = character;
    // Lógica para abrir un modal o mostrar información del personaje
    alert(`Detalles del personaje:\n\nNombre: ${character.name}\nEstado: ${character.status}\nEspecie: ${character.species}`);
  }

  editCharacter(character: any): void {
    this.selectedCharacter = character;
    // Lógica para abrir un modal de edición (simulada aquí con alert)
    alert(`Editar personaje:\n\nNombre: ${character.name}\nEstado: ${character.status}\nEspecie: ${character.species}`);
  }

  deleteCharacter(index: number): void {
    if (confirm('¿Estás seguro de que deseas eliminar este personaje?')) {
      this.displayedCharacters.splice(index, 1);
    }
  }
}
