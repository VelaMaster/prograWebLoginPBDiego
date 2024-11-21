// src/app/character.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { Character } from './models/character.model';

interface ApiInfo {
  count: number;
  pages: number;
  next: string;
  prev: string;
}

interface ApiResponse {
  info: ApiInfo;
  results: Character[];
}

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  private apiUrl = 'https://rickandmortyapi.com/api/character';

  constructor(private http: HttpClient) {}

  // Método para obtener todos los personajes
  getAllCharacters(): Observable<Character[]> {
    return this.http.get<ApiResponse>(this.apiUrl).pipe(
      mergeMap(response => {
        const totalPages = response.info.pages;
        const observables = [];

        // Crear un array de observables para cada página
        for (let page = 2; page <= totalPages; page++) {
          observables.push(this.http.get<ApiResponse>(`${this.apiUrl}?page=${page}`));
        }

        // Combinar todas las solicitudes
        return forkJoin(observables).pipe(
          map(responses => {
            let allCharacters = response.results;
            responses.forEach(res => {
              allCharacters = allCharacters.concat(res.results);
            });
            return allCharacters;
          })
        );
      })
    );
  }
}
