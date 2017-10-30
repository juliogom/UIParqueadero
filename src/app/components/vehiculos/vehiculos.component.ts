import { Component, OnInit } from '@angular/core';
import {VehiculosService,Vehiculo} from '../../servicios/vehiculos.service';

@Component({
  selector: 'app-vehiculos',
  templateUrl: './vehiculos.component.html'
})
export class VehiculosComponent implements OnInit {

  vehiculos:Vehiculo []=[];

  vehiculosPrueba:any[]=[];

  constructor(private _vehiculosServicios:VehiculosService) {
  }

  ngOnInit() {
    this.vehiculos=this._vehiculosServicios.getVehiculos();

    this._vehiculosServicios.getPrueba().subscribe(data => {
      this.vehiculosPrueba= data;
      console.log(data);
    });
  }

}
