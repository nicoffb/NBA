import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaEquiposComponent } from './componentes/lista-equipos/lista-equipos.component';
import { ListaJugadoresComponent } from './componentes/lista-jugadores/lista-jugadores.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { PlayerstatsComponent } from './componentes/playerstats/playerstats.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'index'},
  {path: '', component: MenuComponent},
  {path: 'equipos', component: ListaEquiposComponent},
  {path: 'jugadores', component: ListaJugadoresComponent},
  {path: 'estadisticas', component: PlayerstatsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
