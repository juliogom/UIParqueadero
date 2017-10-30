import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import { VehiculosComponent } from './components/vehiculos/vehiculos.component';
import { VehiculoComponent } from './components/vehiculo/vehiculo.component';

const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'vehiculos', component: VehiculosComponent },
  { path: 'vehiculos/vehiculo/:id', component: VehiculoComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
