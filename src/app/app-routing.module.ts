import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ArticulosComponent } from './articulos/articulos.component';
import { EmpresasComponent } from './empresas/empresas.component';
const routes: Routes = [
  {path:"home", component:HomeComponent},
  {path:"articulos", component:ArticulosComponent},
  {path:"empresas", component:EmpresasComponent},
  {path: "home", redirectTo: '/HomeComponent', pathMatch: 'full'},
  {path: "**", component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
