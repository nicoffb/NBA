import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Team } from 'src/app/interfaces/equipos';
import { Jugador } from 'src/app/interfaces/lista-jugadores';
import { EquiposService } from 'src/app/servicios/equipos.service';
import { ListaJugadoresService } from 'src/app/servicios/lista-jugadores.service';
import { EquiposDialogComponent } from './equipos-dialog/equipos-dialog.component';

const URL_IMAGEN = "https://cdn.nba.com/logos/nba"
@Component({
  selector: 'app-lista-equipos',
  templateUrl: './lista-equipos.component.html',
  styleUrls: ['./lista-equipos.component.css']
})
export class ListaEquiposComponent implements OnInit {

  selectedTeam: Team | undefined;
  teamList: Team[]=[];
  playersList: Jugador[]=[];
  selectedPlayers: Jugador[]=[];
  yearList: String[]=["2016","2017","2018","2019", "2020", "2021", "2022"];
  year: string = "2022";
  pages: number = 0;

  constructor(private equiposService: EquiposService, private jugadoresService: ListaJugadoresService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getAllTeams(this.year);
    this.collectAllPlayers();
  }

  getAllTeams(year: String){
    this.equiposService.getTeamPage(year).subscribe(resp =>{
      this.teamList = [...resp.league.standard];
      this.pages = this.teamList.length / 10
    });
  }
  getPhotoUrl(team: Team){
    let id = team.teamId;
    return `${URL_IMAGEN}/${id}/global/L/logo.svg`;
  }

  showTeamInfo(team: Team){

    let id = team.teamId;
    this.selectedTeam = team;
    this.selectedPlayers = this.playersFromTeam(id);

      this.dialog.open(EquiposDialogComponent, {
        width: '250px',
        enterAnimationDuration: '3000ms',
        exitAnimationDuration: '1500ms',
        data:{
          teamInfo: this.selectedTeam,
          playersFromTeam: this.selectedPlayers
        }
      });
  }

  collectAllPlayers(){

    this.jugadoresService.getJugadores(this.year).subscribe(respuesta => {
      this.playersList= [...respuesta.league.standard];
      if(respuesta.league.africa) {
        this.playersList = [...this.playersList,...respuesta.league.africa];
      }
      if(respuesta.league.sacramento) {
      this.playersList = [...this.playersList, ...respuesta.league.sacramento];
      }
      if(respuesta.league.vegas) {
      this.playersList = [...this.playersList, ...respuesta.league.vegas];
      }
      if(respuesta.league.utah) {
      this.playersList = [...this.playersList, ...respuesta.league.utah];
      }
    });
  }

  playersFromTeam(id: string): Jugador[]{

    let playersSelected: Jugador[]=[];

    this.playersList.forEach(jugador => {

      if(id == jugador.teamId){
        playersSelected.push(jugador);
      }
    });
    return playersSelected;
  }


}
