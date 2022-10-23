import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Equipos, Team } from '../interfaces/equipos';


const API_BASE_URL = "http://data.nba.net/data";

@Injectable({
  providedIn: 'root'
})
export class EquiposService {

  constructor(private http: HttpClient) { }

  getTeamPage(year: String): Observable<Equipos>{
    return this.http.get<Equipos>(`${API_BASE_URL}/10s/prod/v1/${year}/teams.json`);
  }

  /*getTeam(team: Team, year: String): Observable<Team>{
    let id = team.teamId;
    return this.http.get<Team>(`${API_BASE_URL}/10s/prod/v1/${year}/teams.json`);
  }*/
}
