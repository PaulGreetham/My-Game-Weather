import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Team } from '../interfaces/team.interface';
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root',
})
export class FootballService {
  private headers = new HttpHeaders({
    'x-apisports-key': environment.apiFootballKey,
  });

  constructor(private http: HttpClient) {}

  searchTeams(searchTeam: string): Observable<{ response: Team[] }> {
    const apiUrl = `https://v3.football.api-sports.io/teams?search=${searchTeam}`;
    return this.http.get<{ response: Team[] }>(apiUrl, { headers: this.headers });
  }

  getFixtures(teamId: number): Observable<{ response: any[] }> {
    const apiUrl = `https://v3.football.api-sports.io/fixtures?team=${teamId}&next=5`;
    return this.http.get<{ response: any[] }>(apiUrl, { headers: this.headers });
  }
}
