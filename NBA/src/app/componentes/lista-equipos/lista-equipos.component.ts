import { Component, OnInit } from '@angular/core';
import { Team } from 'src/app/interfaces/equipos';
import { EquiposService } from 'src/app/servicios/equipos.service';

const URL_IMAGEN = "https://cdn.nba.com/logos/nba"
@Component({
  selector: 'app-lista-equipos',
  templateUrl: './lista-equipos.component.html',
  styleUrls: ['./lista-equipos.component.css']
})
export class ListaEquiposComponent implements OnInit {

  teamList: Team[]=[];
  year: string = "";
  pages: number = 0;

  constructor(private equiposService: EquiposService) { }

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

}
