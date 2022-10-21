import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaJugadoresComponent } from './componentes/lista-jugadores/lista-jugadores.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'index'},
  {path: 'index', component: ListaJugadoresComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
