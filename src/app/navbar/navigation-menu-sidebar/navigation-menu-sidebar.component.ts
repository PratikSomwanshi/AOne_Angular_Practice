import { Component, inject } from '@angular/core';
import { GlobalStateService } from '../../global-state.service';
import { link_list } from '../../../utilities/navbar_links';

@Component({
  selector: 'app-navigation-menu-sidebar',
  templateUrl: './navigation-menu-sidebar.component.html',
  styleUrl: './navigation-menu-sidebar.component.css',
})
export class NavigationMenuSidebarComponent {
  globalState = inject(GlobalStateService);

  links_list = link_list;
}
