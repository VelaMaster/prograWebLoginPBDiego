// src/app/inicio/inicio.component.ts

import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../character.service';
import { AuthService, User } from '../auth.service';
import { Router } from '@angular/router';
import { Character } from '../models/character.model';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  allCharacters: Character[] = [];       // Todos los personajes
  filteredCharacters: Character[] = [];  // Personajes filtrados
  paginatedCharacters: Character[] = []; // Personajes para la página actual

  // Paginación
  currentPage: number = 1;
  pageSize: number = 10; // Número de elementos por página
  totalPages: number = 1;

  // Filtros y búsqueda
  searchText: string = '';
  filtros: { estado: string; especie: string } = { estado: '', especie: '' };

  // Modal
  showModal: boolean = false;
  modalAction: 'view' | 'edit' | 'delete' | null = null;
  selectedCharacter: Character | null = null;

  // Usuario
  userName: string = '';
  profilePictureUrl: string = 'assets/default-profile-picture.jpg';

  constructor(
    private characterService: CharacterService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Verificar autenticación
    if (!this.authService.isAuthenticated()) {
      this.router.navigate(['/login']);
      return;
    }

    // Obtener información del usuario
    this.authService.user$.subscribe(user => {
      if (user) {
        this.userName = user.name;
        this.profilePictureUrl = user.avatar || 'assets/default-profile-picture.jpg';
      }
    });

    // Cargar todos los personajes
    this.characterService.getAllCharacters().subscribe(
      (characters) => {
        this.allCharacters = characters;
        this.applyFilters();
      },
      (error) => {
        console.error('Error al cargar los personajes:', error);
      }
    );
  }

  // Aplicar filtros y búsqueda
  applyFilters(): void {
    this.filteredCharacters = this.allCharacters.filter(character => {
      const matchesEstado = this.filtros.estado ? character.status.toLowerCase() === this.filtros.estado.toLowerCase() : true;
      const matchesEspecie = this.filtros.especie ? character.species.toLowerCase() === this.filtros.especie.toLowerCase() : true;
      const matchesSearch = this.searchText ? character.name.toLowerCase().includes(this.searchText.toLowerCase()) : true;
      return matchesEstado && matchesEspecie && matchesSearch;
    });

    // Actualizar paginación
    this.totalPages = Math.ceil(this.filteredCharacters.length / this.pageSize);
    this.currentPage = 1;
    this.updatePaginatedCharacters();
  }

  // Actualizar los personajes para la página actual
  updatePaginatedCharacters(): void {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.paginatedCharacters = this.filteredCharacters.slice(startIndex, endIndex);
  }

  // Cambiar de página
  goToPage(page: number): void {
    if (page < 1 || page > this.totalPages) return;
    this.currentPage = page;
    this.updatePaginatedCharacters();
  }

  // Manejar cambios en la búsqueda
  onSearchTextChanged(newSearchText: string): void {
    this.searchText = newSearchText;
    this.applyFilters();
  }

  // Manejar cambios en los filtros
  onFiltersChanged(newFilters: { estado: string; especie: string }): void {
    this.filtros = newFilters;
    this.applyFilters();
  }

  // Abrir modal
  openModal(action: 'view' | 'edit' | 'delete', character: Character): void {
    this.modalAction = action;
    this.selectedCharacter = { ...character };
    this.showModal = true;
  }

  // Cerrar modal
  closeModal(): void {
    this.modalAction = null;
    this.selectedCharacter = null;
    this.showModal = false;
  }

  // Guardar cambios (solo interfaz)
  guardarCambios(): void {
    // Implementar lógica de guardado si es necesario
    this.closeModal();
  }

  // Eliminar personaje (solo interfaz)
  deleteCharacter(): void {
    if (this.selectedCharacter) {
      this.allCharacters = this.allCharacters.filter(char => char.id !== this.selectedCharacter!.id);
      this.applyFilters();
      this.closeModal();
    }
  }

  // Cerrar sesión
  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
