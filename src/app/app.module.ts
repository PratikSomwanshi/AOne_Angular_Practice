import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgIconsModule } from '@ng-icons/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NavbarMainLinksComponent } from './navbar/navbar-main-links/navbar-main-links.component';
import { GamesComponent } from './games/games.component';
import { ProgramsComponent } from './programs/programs.component';
import { NewsComponent } from './news/news.component';
import { ArticlesComponent } from './articles/articles.component';
import { FaqsComponent } from './faqs/faqs.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent, NavbarMainLinksComponent, GamesComponent, ProgramsComponent, NewsComponent, ArticlesComponent, FaqsComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
