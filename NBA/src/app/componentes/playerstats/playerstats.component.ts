import { Component, OnInit } from '@angular/core';
import { Stats } from 'src/app/interfaces/estadisticas';
import { Jugador } from 'src/app/interfaces/lista-jugadores';
import { EstadisticasService } from 'src/app/servicios/estadisticas.service';
import { ListaJugadoresService } from 'src/app/servicios/lista-jugadores.service';

@Component({
  selector: 'app-playerstats',
  templateUrl: './playerstats.component.html',
  styleUrls: ['./playerstats.component.css']
})
export class PlayerstatsComponent implements OnInit {

  listaJugadores: Jugador[] = [];
  year: String = "2022";      //inicializar vacio
  listaAnios: String[] = ["2016", "2017", "2018", "2019", "2020", "2021", "2022"];
  estadisticaJugador= new Map<string, Stats>();


  constructor(private estadisticasService: EstadisticasService, private listaJugadoresServicio: ListaJugadoresService) { }

  ngOnInit(): void {
    this.getTodosLosJugadores(this.year);
  }

  getTodosLosJugadores(year: String) {
    this.listaJugadoresServicio.getJugadores(year).subscribe(respuesta => {
      this.listaJugadores = [...respuesta.league.standard];
      if (respuesta.league.africa) {
        this.listaJugadores = [...this.listaJugadores, ...respuesta.league.africa];
      }
      if (respuesta.league.sacramento) {
        this.listaJugadores = [...this.listaJugadores, ...respuesta.league.sacramento];
      }
      if (respuesta.league.vegas) {
        this.listaJugadores = [...this.listaJugadores, ...respuesta.league.vegas];
      }
      if (respuesta.league.utah) {
        this.listaJugadores = [...this.listaJugadores, ...respuesta.league.utah];
      }
      this.getEstadisticasJugadores();
    });
  }

  getImagenJugador(id: String) {
    return `https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/${id}.png`
  }

  getEstadisticasJugadores(){

      this.listaJugadores.forEach(jugador => {
        this.estadisticasService.getStats(this.year, jugador.personId).subscribe(resp=>{

          debugger
          this.estadisticaJugador.set(jugador.teamId, resp.league.standard.stats);
        });
      });

  }

}
