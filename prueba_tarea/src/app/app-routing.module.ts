import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ElementosComponent } from './components/elementos/elementos.component';
import { InicioComponent } from './components/inicio/inicio.component';

const routes: Routes = [
  {path: 'Inicio', component: InicioComponent},
  {path: 'Elementos', component: ElementosComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'Inicio'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
