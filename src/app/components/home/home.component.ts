import { Component, OnInit } from '@angular/core';
import {VehiculosService,Vehiculo} from '../../servicios/vehiculos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})

export class HomeComponent implements OnInit {

  actividades:any []=[];

  constructor(private _vehiculosActivos:VehiculosService) { }

  ngOnInit() {
    this.actividades=this._vehiculosActivos.getVehiculos();
  }

}
