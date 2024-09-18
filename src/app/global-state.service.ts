import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GlobalStateService {
  showSearch = false;
  showSideBar = true;

  constructor() {}

  toggleSearchBar() {
    this.showSearch = !this.showSearch;
  }

  toggleSideBar() {
    this.showSideBar = !this.showSideBar;
  }
}
