import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GlobalStateService {
  showSideBar = false;

  constructor() {}

  toggleSideBar() {
    this.showSideBar = !this.showSideBar;
  }
}
