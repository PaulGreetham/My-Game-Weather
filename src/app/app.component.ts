import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SearchResultsComponent } from './search-teams/search-results/search-results.component';
import { SearchBarComponent } from './search-teams/search-bar/search-bar.component';
import { Team } from './interfaces/team.interface';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    SearchResultsComponent,
    SearchBarComponent,
    HttpClientModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})

export class AppComponent {
  title = 'my-game-weather';
  searchResults: Team[] = [];

  onTeamsSearched(teams: Team[]): void {
    this.searchResults = teams;
  }
}
