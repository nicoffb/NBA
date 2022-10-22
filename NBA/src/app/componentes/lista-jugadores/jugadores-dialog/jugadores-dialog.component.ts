import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { JugadoresData } from 'src/app/interfaces/lista-jugadores';

@Component({
  selector: 'app-jugadores-dialog',
  templateUrl: './jugadores-dialog.component.html',
  styleUrls: ['./jugadores-dialog.component.css']
})
export class JugadoresDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: JugadoresData) {

   }

  ngOnInit(): void {
  }

}
