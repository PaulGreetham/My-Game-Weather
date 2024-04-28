import { Component, Input } from '@angular/core';
import { Team } from '../../interfaces/team.interface';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-search-results',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
  ],
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.sass'],
})
export class SearchResultsComponent {
  @Input() teams: Team[] = [];

  @Input() searchEvent: Team[] = [];
}
