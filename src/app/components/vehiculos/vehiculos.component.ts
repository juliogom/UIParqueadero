import { Component, OnInit } from '@angular/core';
import {VehiculosService,Vehiculo} from '../../servicios/vehiculos.service';

@Component({
  selector: 'app-vehiculos',
  templateUrl: './vehiculos.component.html'
})
export class VehiculosComponent implements OnInit {

  vehiculos:any []=[];

  constructor(private _vehiculosServicios:VehiculosService){
  }

  ngOnInit() {
    this._vehiculosServicios.getVehiculos().subscribe(dataVehiculos => {
      this.vehiculos=dataVehiculos;
    });
  }

}
