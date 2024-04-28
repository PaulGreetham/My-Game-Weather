import { Component, EventEmitter, Output } from '@angular/core';
import { FootballService } from '../../services/football.service';
import { Team } from '../../interfaces/team.interface';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [
    FormsModule,
  ],
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.sass']
})
export class SearchBarComponent {
  searchQuery: string = '';

  @Output() searchEvent = new EventEmitter<Team[]>();

  constructor(private footballService: FootballService) {}

  search(): void {
    this.footballService.searchTeams(this.searchQuery).subscribe(
      (result: { response: Team[] }) => {
        // Emit the search result to the parent component
        // Make sure to emit the 'response' property of the result since that's the actual array of teams
        this.searchEvent.emit(result.response);
      },
      error => {
        console.error('Error searching for teams', error);
      }
    );
  }
}
