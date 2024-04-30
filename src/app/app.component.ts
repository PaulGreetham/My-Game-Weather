import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SearchResultsComponent } from './search/search-results/search-results.component';
import { SearchBarComponent } from './search/search-bar/search-bar.component';
import { Team, TeamResponse } from './interfaces/team.interface';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    SearchResultsComponent,
    SearchBarComponent,
    HttpClientModule,
    FormsModule,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})


export class AppComponent {
  title = 'my-game-weather';

  teams: Team[] = [];
  selectedTeam: Team | null = null;


  constructor() {
    this.searchResults = [];
  }

  searchResults: TeamResponse[] = [];

  onTeamsSearched(teams: TeamResponse[]): void {
    this.searchResults = teams;
  }

  onTeamSelect(team: Team): void {
    this.selectedTeam = team;
  }
}
