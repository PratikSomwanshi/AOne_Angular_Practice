import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NavbarMainLinksComponent } from './navbar/navbar-main-links/navbar-main-links.component';
import { GamesComponent } from './games/games.component';
import { ProgramsComponent } from './programs/programs.component';
import { NewsComponent } from './news/news.component';
import { ArticlesComponent } from './articles/articles.component';
import { FaqsComponent } from './faqs/faqs.component';
import { NavigationSidebarComponent } from './navigation-sidebar/navigation-sidebar.component';
import { NavigationHamburgerMenuComponent } from './navbar/navigation-hamburger-menu/navigation-hamburger-menu.component';
import { NavigationMenuSidebarComponent } from './navbar/navigation-menu-sidebar/navigation-menu-sidebar.component';
import { HomeComponent } from './home/home.component';
import { HeroSectionComponent } from './home/hero-section/hero-section.component';
import { LatestParentComponent } from './home/latest-parent/latest-parent.component';
import { LatestChildComponent } from './home/latest-parent/latest-child/latest-child.component';
import { StarRatingComponent } from './home/star-rating/star-rating.component';
import { PokemonSkeletonComponent } from './components/skeletons/pokemon-skeleton/pokemon-skeleton.component';
import { ThemeSwitchComponent } from './components/theme-switch/theme-switch.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NavbarMainLinksComponent,
    GamesComponent,
    ProgramsComponent,
    NewsComponent,
    ArticlesComponent,
    FaqsComponent,
    NavigationSidebarComponent,
    NavigationHamburgerMenuComponent,
    NavigationMenuSidebarComponent,
    HomeComponent,
    HeroSectionComponent,
    LatestParentComponent,
    LatestChildComponent,
    StarRatingComponent,
    PokemonSkeletonComponent,
    ThemeSwitchComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
