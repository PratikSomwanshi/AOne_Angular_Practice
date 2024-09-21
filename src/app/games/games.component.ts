import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { PokemonService } from '../../services/Pokemon';
import { finalize, forkJoin, map, Observable } from 'rxjs';
import { AjaxResponse } from 'rxjs/ajax';

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

interface PokemonUrl {
  url: string;
  name: string;
}

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrl: './games.component.css',
})
export class GamesComponent {
  pokemonService = inject(PokemonService);

  @ViewChild('parentContainer') parentContainer!: ElementRef;

  offset = 0;
  pokemon: Pokemon[] = [];
  pokemonUrls: PokemonUrl[] = [];
  loading = false;
  error = '';
  currentPage = -1;
  totalPages = 100; // Example: assume 100 pages
  pageSize = 10; // Number of Pokémon per page
  visiblePages = 5;

  ngOnInit() {
    this.getPokemonUrls(1);
  }

  // Get Pokemon URLs for the current page
  getPokemonUrls(page: number) {
    if (this.currentPage == page) return; // Prevent fetching the same page
    this.currentPage = page;

    this.pokemon = []; // Clear previous Pokémon
    this.error = ''; // Clear previous error
    this.pokemonUrls = []; // Clear previous URLs

    this.loading = true;
    this.scrollToParent();
    if (page > 0) this.offset = page * 10 - 10;

    this.pokemonService.getPokemon(this.offset).subscribe({
      next: (res) => {
        this.totalPages = Math.ceil(res.response.count / this.pageSize);
        this.getPokemon(res.response.results);
      },
      error: (err) => {
        this.loading = false;
        console.error('Error fetching Pokémon URLs:', err);
        this.error = 'Failed to load Pokémon URLs.';
      },
    });
  }

  // Fetch detailed information for each Pokemon
  getPokemon(pokemonUrls: PokemonUrl[]) {
    const pokemonArray: Observable<Pokemon>[] = pokemonUrls.map(
      (pokemonUrl) => {
        return this.pokemonService.getPokemonByUrl(pokemonUrl.url).pipe(
          map((res: AjaxResponse<Pokemon>) => {
            return {
              forms: res.response.forms,
              sprites: res.response.sprites,
            };
          })
        );
      }
    );

    forkJoin(pokemonArray)
      .pipe(
        finalize(() => {
          this.loading = false;
        })
      )
      .subscribe({
        next: (res: Pokemon[]) => {
          this.pokemon = res;
        },
        error: (err) => {
          console.error('Error fetching Pokémon:', err);
          this.error = 'Failed to load Pokémon.';
        },
      });
  }

  scrollToParent() {
    if (this.parentContainer) {
      this.parentContainer.nativeElement.scrollIntoView({
        behavior: 'smooth', // Enable smooth scrolling
        block: 'start', // Scroll to the top of the parent container
      });
    }
  }

  goToNextPage() {
    if (this.currentPage < this.totalPages) {
      this.getPokemonUrls(this.currentPage + 1);
    }
  }

  goToPreviousPage() {
    if (this.currentPage > 1) {
      this.getPokemonUrls(this.currentPage - 1);
    }
  }

  goToFirstPage() {
    this.getPokemonUrls(1);
  }

  goToLastPage() {
    this.getPokemonUrls(this.totalPages);
  }

  getVisiblePages(): number[] {
    const pages = [];
    const halfRange = Math.floor(this.visiblePages / 2);
    const start = Math.max(1, this.currentPage - halfRange);
    const end = Math.min(this.totalPages, start + this.visiblePages - 1);

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    return pages;
  }
}
