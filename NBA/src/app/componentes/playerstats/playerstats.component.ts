import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CareerSummary, EstadisticaData } from 'src/app/interfaces/estadisticas';



@Component({
  selector: 'app-playerstats',
  templateUrl: './playerstats.component.html',
  styleUrls: ['./playerstats.component.css']
})
export class PlayerstatsComponent implements OnInit {

  finalData: CareerSummary = {} as CareerSummary;

  columndefs: string [] = ['img', 'fullName', 'partidosJugados', 'puntosTotales',
   'puntosPorPartido', 'rebotesPorPartido', 'asistenciasPorPartido', 'taponesPorPartido'];

  constructor(@Inject(MAT_DIALOG_DATA) public data: EstadisticaData) { }

  ngOnInit(): void {
    /*if(this.data.estadisticasInfo != undefined){
      this.finalData = this.data.estadisticasInfo;
    }*/
  }

  getPlayerPhotoUrl (id : String){
    return `https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/${id}.png`
  }
}
