import { Component, OnInit } from '@angular/core';
import { ListaJugadoresService } from 'src/app/servicios/lista-jugadores.service';
import { Jugador } from 'src/app/interfaces/lista-jugadores';
import { JugadoresDialogComponent } from './jugadores-dialog/jugadores-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-lista-jugadores',
  templateUrl: './lista-jugadores.component.html',
  styleUrls: ['./lista-jugadores.component.css']
})
export class ListaJugadoresComponent implements OnInit {

  listaJugadores: Jugador[] = [];
  year: String="";
  jugadorSeleccionado: Jugador|undefined;          //inicializar vacio

  constructor(private listaJugadoresServicio : ListaJugadoresService, private jugadoresDialog : MatDialog  ) { }

  ngOnInit(): void {
    this.getTodosLosJugadores("2022");
  }

  getTodosLosJugadores(year: String){
    this.listaJugadoresServicio.getJugadores(year).subscribe(respuesta => {
      this.listaJugadores= [...respuesta.league.standard,...respuesta.league.africa,...respuesta.league.sacramento, ...respuesta.league.vegas, ...respuesta.league.utah];
    });
  }

  getImagenJugador (id : String){
  return `https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/${id}.png`}

  getJugador (jugador : Jugador){
    this.jugadorSeleccionado = jugador;
    this.jugadoresDialog.open(JugadoresDialogComponent,{
      width: '250px',
        enterAnimationDuration: '2000ms',
        exitAnimationDuration: '1500ms',
        data:{
          jugadorInfo: this.jugadorSeleccionado
        }
    })
  }

}
