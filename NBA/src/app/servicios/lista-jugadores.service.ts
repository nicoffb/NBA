import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListaJugadores } from '../interfaces/lista-jugadores';

const API_BASE_URL = 'https://data.nba.net/data/';

@Injectable({
  providedIn: 'root'
})
export class ListaJugadoresService {

  constructor(private http: HttpClient) { }

  public getJugadores(year: String): Observable<ListaJugadores> {
    return this.http.get<ListaJugadores>(`${API_BASE_URL}10s/prod/v1/${year}/players.json`);
  }


}
