import { Component, inject } from '@angular/core';
import { GlobalStateService } from '../../global-state.service';

@Component({
  selector: 'app-navigation-hamburger-menu',
  templateUrl: './navigation-hamburger-menu.component.html',
  styleUrl: './navigation-hamburger-menu.component.css',
})
export class NavigationHamburgerMenuComponent {
  globalState = inject(GlobalStateService);
}
