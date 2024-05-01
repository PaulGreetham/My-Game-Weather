import { Component, Input } from '@angular/core';
import { TeamResponse } from '../../interfaces/team.interface';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-results',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    SearchBarComponent,
  ],
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent {
  @Input() teams: TeamResponse[] = [];

  constructor(private router: Router) {}

  goToFixtures(teamId: number): void {
    this.router.navigate(['/fixtures', teamId]);
  }
}
