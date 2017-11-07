import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class VehiculosService {

  private vehiculosActivos:any[]=[];
  private vehiculos:any[]=[];

  constructor( private http: Http) {
  }

  getVehiculos(){
      return this.http.get('http://localhost:8082/vehiculos').map(respuesta => respuesta.json());

  }

  getVehiculo(index:number){
    this.vehiculos[index];
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

}

export interface Vehiculo{
    id: number;
    nombre:string;
    modelo:number;
    placa: string;
    color:string;
}
