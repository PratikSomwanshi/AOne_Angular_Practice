import { Component, inject } from '@angular/core';
import { GlobalStateService } from '../global-state.service';

@Component({
  selector: 'app-navigation-sidebar',
  templateUrl: './navigation-sidebar.component.html',
  styleUrl: './navigation-sidebar.component.css',
})
export class NavigationSidebarComponent {
  globalState = inject(GlobalStateService);

  toggleSearchBar() {
    this.globalState.toggleSearchBar();
  }
}
