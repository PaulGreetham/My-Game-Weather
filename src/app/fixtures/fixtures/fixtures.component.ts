import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FootballService } from '../../services/football.service';
import { Team } from '../../interfaces/team.interface';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-fixtures',
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  templateUrl: './fixtures.component.html',
  styleUrls: ['./fixtures.component.sass']
})
export class FixturesComponent implements OnChanges {
  @Input() selectedTeam!: Team;
  fixtures: any[] = [];

  constructor(private footballService: FootballService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['selectedTeam'] && this.selectedTeam) {
      this.footballService.getFixtures(this.selectedTeam.id).subscribe({
        next: (data) => this.fixtures = data.response,
        error: (error) => console.error('Error getting fixtures', error)
      });
    }
  }
}
