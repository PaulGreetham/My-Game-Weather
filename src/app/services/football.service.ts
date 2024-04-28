import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Team } from '../interfaces/team.interface';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FootballService {
  private apiUrl = 'https://v3.football-api-sports.io/';

  constructor(private http: HttpClient) {}

  searchTeams(searchQuery: string): Observable<{ response: Team[] }> {
    const headers = new HttpHeaders({
      'X-Auth-Token': environment.apiFootballKey
    });

    return this.http.get<{ response: Team[] }>(`${this.apiUrl}teams`, {
      headers,
      params: { search: searchQuery }
    });
  }
}
