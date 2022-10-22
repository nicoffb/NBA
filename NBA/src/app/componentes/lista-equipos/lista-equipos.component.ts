import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Team } from 'src/app/interfaces/equipos';
import { EquiposService } from 'src/app/servicios/equipos.service';
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
  yearList: String[]=["2016","2017","2018","2019", "2020", "2021", "2022"];
  year: string = "";
  pages: number = 0;

  constructor(private equiposService: EquiposService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getAllTeams("2022")
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

  /*showTeamInfo(team: Team, year: String){
    this.equiposService.getTeam(team, year).subscribe(resp=>{
      this.selectedTeam = resp;

      this.dialog.open(EquiposDialogComponent, {
        width: '250px',
        enterAnimationDuration: '3000ms',
        exitAnimationDuration: '1500ms',
        data:{
          teamInfo: this.selectedTeam
        }
      })
    });
  }*/

  showTeamInfo(team: Team){

    this.selectedTeam = team;

      this.dialog.open(EquiposDialogComponent, {
        width: '250px',
        enterAnimationDuration: '3000ms',
        exitAnimationDuration: '1500ms',
        data:{
          teamInfo: this.selectedTeam
        }
      })
  }

}
