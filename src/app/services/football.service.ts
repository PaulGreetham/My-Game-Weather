import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Team } from '../interfaces/team.interface';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class FootballService {
  private headers = new HttpHeaders({
    'X-RapidAPI-Key': environment.apiFootballKey,
  });

  constructor(private http: HttpClient) {}

  searchTeams(searchQuery: string): Observable<{ response: Team[] }> {
    const apiUrl = `https://v3.football-api-sports.io/v3/teams?search=${searchQuery}`;
    return this.http.get<{ response: Team[] }>(apiUrl, { headers: this.headers });
  }

  getFixtures(teamId: number): Observable<{ response: any[] }> {
    const apiUrl = `https://v3.football-api-sports.io/v3/fixtures?team=${teamId}&next=5`;
    return this.http.get<{ response: any[] }>(apiUrl, { headers: this.headers });
  }
}
