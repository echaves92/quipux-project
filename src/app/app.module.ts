import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';

import { EmpresasComponent } from './empresas/empresas.component';
import { HeaderComponent } from './header/header.component';
import { ArticulosComponent } from './articulos/articulos.component';
import { InformacionContactoComponent } from './informacion-contacto/informacion-contacto.component';
import { InformacionEmpresaComponent } from './informacion-empresa/informacion-empresa.component'


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EmpresasComponent,
    HeaderComponent,
    ArticulosComponent,
    InformacionContactoComponent,
    InformacionEmpresaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
