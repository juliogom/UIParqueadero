import { Component } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import {VehiculosService,Vehiculo} from '../../servicios/vehiculos.service';

@Component({
  selector: 'app-vehiculo',
  templateUrl: './vehiculo.component.html'
})
export class VehiculoComponent {

  vehiculo:any={};

  constructor(private activatedRoute:ActivatedRoute,private _vehiculosServicio: VehiculosService) {

    this.activatedRoute.params.subscribe(params=>{
      console.log(params['id']);
      this.vehiculo=this._vehiculosServicio.getVehiculo(params['id']);
    });

   }


}
