import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GlobalStateService {
  showSearch = false;
  showSideBar = false;
  theme = true;
  theme_internal = 'dark';

  constructor() {}

  toggleSearchBar() {
    this.showSearch = !this.showSearch;
  }

  toggleSideBar() {
    this.showSideBar = !this.showSideBar;
  }

  setTheme() {
    this.theme = !this.theme;
    console.log(this.theme);
  }
}
