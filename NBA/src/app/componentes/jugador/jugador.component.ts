import { Component, Input, OnInit } from '@angular/core';
import { ListaJugadoresService } from 'src/app/servicios/lista-jugadores.service';
import { Jugador } from 'src/app/interfaces/lista-jugadores';
import { JugadoresDialogComponent } from '../lista-jugadores/jugadores-dialog/jugadores-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { EstadisticasService } from 'src/app/servicios/estadisticas.service';
import { CareerSummary } from 'src/app/interfaces/estadisticas';
import { PlayerstatsComponent } from '../playerstats/playerstats.component';

@Component({
  selector: 'app-jugador',
  templateUrl: './jugador.component.html',
  styleUrls: ['./jugador.component.css'],
})
export class JugadorComponent implements OnInit {
  @Input() jugador: Jugador = {} as Jugador;

  listaJugadores: Jugador[] = [];
  year: String = '2022';
  jugadorSeleccionado: Jugador | undefined;
  listaAnios: String[] = [
    '2016',
    '2017',
    '2018',
    '2019',
    '2020',
    '2021',
    '2022',
  ];
  estadisticaJugador: CareerSummary = {} as CareerSummary

  constructor(
    private listaJugadoresServicio: ListaJugadoresService,
    private jugadoresDialog: MatDialog,
    private estadisticasService: EstadisticasService
  ) {}

  ngOnInit(): void {
    this.getTodosLosJugadores(this.year);
  }

  getTodosLosJugadores(year: String) {
    this.listaJugadoresServicio.getJugadores(year).subscribe((respuesta) => {
      this.listaJugadores = [...respuesta.league.standard];
      if (respuesta.league.africa) {
        this.listaJugadores = [
          ...this.listaJugadores,
          ...respuesta.league.africa,
        ];
      }
      if (respuesta.league.sacramento) {
        this.listaJugadores = [
          ...this.listaJugadores,
          ...respuesta.league.sacramento,
        ];
      }
      if (respuesta.league.vegas) {
        this.listaJugadores = [
          ...this.listaJugadores,
          ...respuesta.league.vegas,
        ];
      }
      if (respuesta.league.utah) {
        this.listaJugadores = [
          ...this.listaJugadores,
          ...respuesta.league.utah,
        ];
      }
    });
  }

  getImagenJugador(id: String) {
    return `https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/${id}.png`;
  }

  getJugador(jugador: Jugador) {
    this.jugadorSeleccionado = jugador;

    this.jugadoresDialog.open(JugadoresDialogComponent, {
      width: '25%',
      enterAnimationDuration: '2000ms',
      exitAnimationDuration: '1500ms',
      data: {
        jugadorInfo: this.jugadorSeleccionado,
      },
    });
  }

  getEstadisticasJugador(jugador: Jugador) {
    this.estadisticasService
      .getStats(this.year, jugador.personId)
      .subscribe((resp) => {
        this.jugadoresDialog.open(PlayerstatsComponent, {
          width: '75%',
          enterAnimationDuration: '1000ms',
          exitAnimationDuration: '500ms',
          data: {
            estadisticaInfo: resp.league.standard.stats.careerSummary,
            jugadorInfo: jugador
          },
        });
      });
  }

  getEstadistica(jugador: Jugador) {
    debugger;
    let stats = this.getEstadisticasJugador(jugador)
    this.jugadoresDialog.open(PlayerstatsComponent, {
      width: '75%',
      enterAnimationDuration: '1000ms',
      exitAnimationDuration: '500ms',
      data: {
        estadisticaInfo: stats,
        jugadorInfo: jugador
      },
    });
  }
}
