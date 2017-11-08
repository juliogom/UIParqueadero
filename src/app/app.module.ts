import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
 import { NguiDatetimePickerModule } from '@ngui/datetime-picker';
//Rutas
import { app_routing } from './app.routes';
//Servicios
import { VehiculosService } from "./servicios/vehiculos.service";
import { ModalService } from './servicios/modal.service';

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
import { ServicioComponent } from './components/modales/servicio/servicio.component';

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
    NuevoUsuarioComponent,
    ServicioComponent
  ],
  imports: [
    BrowserModule,NguiDatetimePickerModule,
    app_routing,
    HttpModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [VehiculosService,ModalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
