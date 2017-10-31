import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

//Rutas
import { APP_ROUTING } from './app.routes';
//Servicios
import { VehiculosService } from "./servicios/vehiculos.service";

//Componentes
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './components/compartidos/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { VehiculosComponent } from './components/vehiculos/vehiculos.component';
import { VehiculoComponent } from './components/vehiculo/vehiculo.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { NuevoUsuarioComponent } from './components/usuario/nuevo-usuario/nuevo-usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    HomeComponent,
    VehiculosComponent,
    VehiculoComponent,
    UsuariosComponent,
    UsuarioComponent,
    NuevoUsuarioComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    HttpModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [VehiculosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
