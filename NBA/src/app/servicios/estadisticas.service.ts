import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EstadisticasJugadores } from '../interfaces/estadisticas';


const API_BASE_URL = 'http://data.nba.net/data/';

@Injectable({
  providedIn: 'root'
})
export class EstadisticasService {

  constructor(private http: HttpClient) { }

  public getStats(year: String, personId : String): Observable<EstadisticasJugadores> {
    return this.http.get<EstadisticasJugadores>(`${API_BASE_URL}10s/prod/v1/${year}/players/${personId}_profile.json`); //como pongo person id
  }
}
