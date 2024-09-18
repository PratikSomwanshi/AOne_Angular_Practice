import { Component } from '@angular/core';
import { link_list as links_list } from '../../../utilities/navbar_links';

@Component({
  selector: 'app-navbar-main-links',
  templateUrl: './navbar-main-links.component.html',
  styleUrl: './navbar-main-links.component.css',
})
export class NavbarMainLinksComponent {
  link_list = links_list;
}
