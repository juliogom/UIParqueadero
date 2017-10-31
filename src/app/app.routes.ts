import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import { VehiculosComponent } from './components/vehiculos/vehiculos.component';
import { VehiculoComponent } from './components/vehiculo/vehiculo.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { NuevoUsuarioComponent } from './components/usuario/nuevo-usuario/nuevo-usuario.component';

const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'vehiculos', component: VehiculosComponent },
  { path: 'vehiculos/vehiculo/:id', component: VehiculoComponent },
  { path: 'usuarios',component: UsuariosComponent},
  { path: 'usuarios/usuario/:id', component: UsuarioComponent},
  { path: 'usuarios/nuevo-usuario', component: NuevoUsuarioComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
