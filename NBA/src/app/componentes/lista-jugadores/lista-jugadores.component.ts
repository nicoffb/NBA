import { Component, OnInit } from '@angular/core';
import { ListaJugadoresService } from 'src/app/servicios/lista-jugadores.service';
import { Jugador } from 'src/app/interfaces/lista-jugadores';
import { JugadoresDialogComponent } from './jugadores-dialog/jugadores-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { EstadisticasService } from 'src/app/servicios/estadisticas.service';
import { CareerSummary } from 'src/app/interfaces/estadisticas';
import { PlayerstatsComponent } from '../playerstats/playerstats.component';

@Component({
  selector: 'app-lista-jugadores',
  templateUrl: './lista-jugadores.component.html',
  styleUrls: ['./lista-jugadores.component.css']
})
export class ListaJugadoresComponent implements OnInit {

  listaJugadores: Jugador[] = [];
  year: String="2022";
  jugadorSeleccionado: Jugador|undefined;          //inicializar vacio
  listaAnios : String[] = ["2016","2017","2018","2019","2020","2021","2022"];
  estadisticaJugador: CareerSummary | undefined;

  constructor(private listaJugadoresServicio : ListaJugadoresService, private jugadoresDialog : MatDialog, private estadisticasService: EstadisticasService) { }

  ngOnInit(): void {
    this.getTodosLosJugadores(this.year);
  }

  getTodosLosJugadores(year: String){
    this.listaJugadoresServicio.getJugadores(year).subscribe(respuesta => {
      this.listaJugadores= [...respuesta.league.standard];
      if(respuesta.league.africa) {
        this.listaJugadores = [...this.listaJugadores,...respuesta.league.africa];
      }
      if(respuesta.league.sacramento) {
      this.listaJugadores = [...this.listaJugadores, ...respuesta.league.sacramento];
      }
      if(respuesta.league.vegas) {
      this.listaJugadores = [...this.listaJugadores, ...respuesta.league.vegas];
      }
      if(respuesta.league.utah) {
      this.listaJugadores = [...this.listaJugadores, ...respuesta.league.utah];
      }
    });
  }




}
