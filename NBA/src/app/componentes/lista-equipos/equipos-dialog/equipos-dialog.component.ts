import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Team, TeamData } from 'src/app/interfaces/equipos';

const URL_IMAGEN = "https://cdn.nba.com/logos/nba"
@Component({
  selector: 'app-equipos-dialog',
  templateUrl: './equipos-dialog.component.html',
  styleUrls: ['./equipos-dialog.component.css']
})
export class EquiposDialogComponent implements OnInit {

  columndefs: string [] = ['img', 'fullName'];
  constructor(@Inject(MAT_DIALOG_DATA) public data: TeamData) { }

  ngOnInit(): void {
  }

  getPhotoUrl(team: Team){
    let id = team.teamId;
    return `${URL_IMAGEN}/${id}/global/L/logo.svg`;
  }

  getPlayerPhotoUrl (id : String){
    return `https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/${id}.png`
  }
}
