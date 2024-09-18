import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar-main-links',
  templateUrl: './navbar-main-links.component.html',
  styleUrl: './navbar-main-links.component.css',
})
export class NavbarMainLinksComponent {
  link_list = [
    { name: 'Home', icon: '/navbar_icons/home.svg' },
    { name: 'Games', icon: '/navbar_icons/games.svg' },
    { name: 'Programs', icon: '/navbar_icons/programming.svg' },
    { name: 'News', icon: '/navbar_icons/news.svg' },
    { name: 'Articles', icon: '/navbar_icons/article.svg' },
    { name: 'FAQ', icon: '/navbar_icons/news.svg' },
  ];
}
