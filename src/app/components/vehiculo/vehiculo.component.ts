import { Component } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import {VehiculosService} from '../../servicios/vehiculos.service';

import {Vehiculo} from '../../modelo/Vehiculo';

@Component({
  selector: 'app-vehiculo',
  templateUrl: './vehiculo.component.html'
})

export class VehiculoComponent {

  vehiculo:Vehiculo;

  constructor(private activatedRoute:ActivatedRoute,private _vehiculosServicio: VehiculosService) {

    this.activatedRoute.params.subscribe(params=>{
      console.log(params['id']);
      this.vehiculo=this._vehiculosServicio.getVehiculo(params['id']);
    });

   }


}
