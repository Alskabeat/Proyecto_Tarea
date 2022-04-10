import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ElementosComponent } from './components/elementos/elementos.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { PortadaComponent } from './portada/portada.component';
import { Elementos2Component } from './elementos2/elementos2.component';

const routes: Routes = [
  {path: 'Inicio', component: InicioComponent},
  {path: 'Elementos', component: ElementosComponent},
  {path: 'Elementos2', component: Elementos2Component},
  {path: 'Portada', component: PortadaComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'Inicio'}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true, relativeLinkResolution: 'legacy'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
