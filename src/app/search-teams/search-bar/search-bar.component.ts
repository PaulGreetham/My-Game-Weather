import { Component, EventEmitter, Output } from '@angular/core';
import { FootballService } from '../../services/football.service';
import { ApiResponse, Team, TeamResponse } from '../../interfaces/team.interface';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
  ],
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.sass'],
})

export class SearchBarComponent {
  searchTeam: string = '';
  @Output() searchEvent = new EventEmitter<TeamResponse[]>();

  constructor(private footballService: FootballService) {}

  search(): void {
    this.footballService.searchTeams(this.searchTeam).subscribe({
      next: (apiResponse: ApiResponse) => {
        this.searchEvent.emit(apiResponse.response);  // Now emitting TeamResponse[] correctly
      },
      error: (error) => console.error('Error searching for teams', error)
    });
  }
}
