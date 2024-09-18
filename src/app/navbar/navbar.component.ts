import { Component, inject } from '@angular/core';
import { GlobalStateService } from '../global-state.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  globalState = inject(GlobalStateService);

  toggleSearchBar() {
    this.globalState.toggleSearchBar();
  }
}
