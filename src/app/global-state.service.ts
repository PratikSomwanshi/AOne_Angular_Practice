import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GlobalStateService {
  showSideBar = true;

  constructor() {}

  toggleSideBar() {
    this.showSideBar = !this.showSideBar;
  }
}
