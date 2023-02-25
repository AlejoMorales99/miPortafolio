import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav/nav.component';
import { InicioComponent } from './inicio/inicio/inicio.component';
import { FooterComponent } from './footer/footer/footer.component';
import { RouterModule, Routes } from '@angular/router';
import { InteresesComponent } from './intereses/intereses/intereses.component';
import { ProyectosComponent } from './proyectos/proyectos/proyectos.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';


 const appRoutes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'intereses', component: InteresesComponent },
  { path: 'proyectos', component: ProyectosComponent},


];


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    InicioComponent,
    FooterComponent,
    InteresesComponent,
    ProyectosComponent,
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    Ng2SearchPipeModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
