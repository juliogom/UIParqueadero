import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
//Rutas
import { APP_ROUTING } from './app.routes';
//Servicios
import { VehiculosService } from "./servicios/vehiculos.service";

//Componentes
import { AppComponent } from './app.component';
import { BodyComponent }from "./components/body.component";
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './components/compartidos/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { VehiculosComponent } from './components/vehiculos/vehiculos.component';
import { VehiculoComponent } from './components/vehiculo/vehiculo.component';

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    FooterComponent,
    NavbarComponent,
    HomeComponent,
    VehiculosComponent,
    VehiculoComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    HttpModule

  ],
  providers: [VehiculosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
