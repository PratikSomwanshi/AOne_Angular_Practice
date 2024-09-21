import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ajax, AjaxResponse } from 'rxjs/ajax';

interface Pokemon {
  url: string;
  name: string;
}

interface PokemonArray {
  count: number;
  next: string;
  previous: string;
  results: Pokemon[];
}

interface Pokemon {
  forms: [
    {
      name: string;
    }
  ];
  sprites: {
    other: {
      dream_world: {
        front_default: string;
      };
    };
  };
}

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  getPokemon(page: number): Observable<AjaxResponse<PokemonArray>> {
    return ajax.get(
      `https://pokeapi.co/api/v2/pokemon?limit=10&offset=${page}`
    );
  }

  getPokemonByUrl(url: string): Observable<AjaxResponse<Pokemon>> {
    return ajax.get(url);
  }
}
