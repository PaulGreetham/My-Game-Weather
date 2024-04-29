import { Component, EventEmitter, Output } from '@angular/core';
import { FootballService } from '../../services/football.service';
import { Team } from '../../interfaces/team.interface';
// import { HttpClientModule } from '@angular/common/http';
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
  // imports array is not needed here if you've already included HttpClientModule in your root app component
})
export class SearchBarComponent {
  searchTeam: string = '';
  @Output() searchEvent = new EventEmitter<Team[]>();

  constructor(private footballService: FootballService) {}

  search(): void {
    this.footballService.searchTeams(this.searchTeam).subscribe({
      next: (data) => {
        this.searchEvent.emit(data.response);
      },
      error: (error) => console.error('Error searching for teams', error)
    });
  }
}
