import { Injectable } from '@angular/core';
import { Http, Response,RequestOptions, Headers, URLSearchParams} from '@angular/http';
import { Vehiculo } from '../modelo/Vehiculo';

import 'rxjs/add/operator/map';

@Injectable()
export class VehiculosService {

  private vehiculosActivos:Vehiculo[]=[];
  private vehiculos:Vehiculo[]=[];

  constructor( private http: Http) {
  }

  getVehiculos(){
      return this.http.get('http://localhost:8082/vehiculos').map(respuesta => respuesta.json());

  }

  guardarVehiculo(vehiculo:Vehiculo){

    let myHeaders = new Headers();

	  myHeaders.append('Content-Type', 'application/json');

    let options = new RequestOptions({ headers: myHeaders});

    return this.http.post('http://localhost:8082/parqueadero/vehiculos',JSON.stringify(vehiculo),options).
      map(res=> res.json())
      .subscribe();
  }


  getVehiculo(index:number):Vehiculo{
    return this.vehiculos[index];
  }

  getVehiculosActivos(){
    this.http.get('http://localhost:8082/parqueadero/vehiculos').map(res => res.json())
    .subscribe(vehiculosActivos =>{
      this.vehiculosActivos=vehiculosActivos;
    });

    return this.vehiculosActivos;
  }

  getVehiculoActivo(index:number){
    return this.vehiculosActivos[index];
  }

  getTiposVehiculos(){

    return this.http.get('http://localhost:8082/vehiculos/tiposVehiculos').map(respuesta => respuesta.json());

  }
}
