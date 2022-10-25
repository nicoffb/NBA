import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TeamData } from 'src/app/interfaces/equipos';

const URL_IMAGEN = "https://cdn.nba.com/logos/nba"
@Component({
  selector: 'app-equipos-dialog',
  templateUrl: './equipos-dialog.component.html',
  styleUrls: ['./equipos-dialog.component.css']
})
export class EquiposDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: TeamData) { }

  ngOnInit(): void {
  }
}
