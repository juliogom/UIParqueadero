import { Component, OnInit } from '@angular/core';
import {VehiculosService} from '../../servicios/vehiculos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vehiculos',
  templateUrl: './vehiculos.component.html'
})
export class VehiculosComponent implements OnInit {

  vehiculos:any []=[];

  constructor(private _vehiculosServicios:VehiculosService,private _router:Router){
  }

  ngOnInit() {
    this._vehiculosServicios.getVehiculos().subscribe(dataVehiculos => {
      this.vehiculos=dataVehiculos;
    });
  }

  crearVehiculo(){
    this._router.navigate(['vehiculos/nuevo-vehiculo']);
  }

}
