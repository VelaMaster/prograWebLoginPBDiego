// inicio.component.ts

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService, User } from '../auth.service';
import { Router } from '@angular/router';

interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  image: string;
  // Agrega otros campos según la API
}

interface ApiResponse {
  info: {
    pages: number;
    // Otros campos si es necesario
  };
  results: Character[];
}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  allCharacters: Character[] = [];
  displayedCharacters: Character[] = [];
  currentApiPage: number = 1;
  currentComponentPage: number = 1;
  totalApiPages: number = 1;
  totalComponentPages: number = 1;
  pageSize: number = 10;
  searchText: string = '';
  showModal: boolean = false;
  modalAction: 'view' | 'edit' | 'delete' | null = null;
  selectedCharacter: Character | null = null;

  // Propiedades para el usuario
  userName: string = '';
  profilePictureUrl: string = 'assets/default-profile-picture.jpg'; // Imagen por defecto

  constructor(
    private http: HttpClient,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Verificar si el usuario está autenticado
    if (!this.authService.isAuthenticated()) {
      this.router.navigate(['/login']);
      return;
    }

    // Suscribirse al observable del usuario
    this.authService.user$.subscribe(user => {
      if (user) {
        this.userName = user.name;
        this.profilePictureUrl = user.avatar || 'assets/default-profile-picture.jpg';
      }
    });

    this.loadApiPage(this.currentApiPage);
  }

  loadApiPage(page: number): void {
    const url = `https://rickandmortyapi.com/api/character?page=${page}`;
    this.http.get<ApiResponse>(url).subscribe((response) => {
      this.allCharacters = response.results;
      this.totalApiPages = response.info.pages;
      this.calculateComponentPages();
      this.updateDisplayedCharacters();
    }, error => {
      console.error('Error al cargar los personajes:', error);
    });
  }

  calculateComponentPages(): void {
    this.totalComponentPages = this.totalApiPages * 2;
  }

  updateDisplayedCharacters(): void {
    this.currentApiPage = Math.ceil(this.currentComponentPage / 2);
    const isFirstHalf = this.currentComponentPage % 2 !== 0;
    const startIndex = isFirstHalf ? 0 : 10;
    const endIndex = isFirstHalf ? 10 : 20;

    this.displayedCharacters = this.allCharacters.slice(startIndex, endIndex);
  }

  goToPage(page: number): void {
    if (page >= 1 && page <= this.totalComponentPages) {
      const newApiPage = Math.ceil(page / 2);
      if (newApiPage !== this.currentApiPage) {
        this.currentApiPage = newApiPage;
        this.loadApiPage(newApiPage);
      }
      this.currentComponentPage = page;
      this.updateDisplayedCharacters();
    }
  }

  openModal(action: 'view' | 'edit' | 'delete', character: Character): void {
    this.modalAction = action;
    this.selectedCharacter = { ...character }; // Clonar para evitar mutaciones directas
    this.showModal = true;
  }

  closeModal(): void {
    this.modalAction = null;
    this.selectedCharacter = null;
    this.showModal = false;
  }

  guardarCambios(): void {
    if (this.modalAction === 'edit' && this.selectedCharacter) {
      const index = this.allCharacters.findIndex(char => char.id === this.selectedCharacter!.id);
      if (index !== -1) {
        this.allCharacters[index] = { ...this.selectedCharacter };
        this.updateDisplayedCharacters();
        this.closeModal();
      }
    }
  }

  deleteCharacter(): void {
    if (this.modalAction === 'delete' && this.selectedCharacter) {
      this.allCharacters = this.allCharacters.filter(
        (char) => char.id !== this.selectedCharacter!.id
      );
      this.updateDisplayedCharacters();
      this.closeModal();
    }
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  // Getter para filtrar personajes según el texto de búsqueda
  get filteredCharacters(): Character[] {
    if (!this.searchText) {
      return this.displayedCharacters;
    }
    return this.displayedCharacters.filter(character =>
      character.name.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }
}
