import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class VehiculosService {

  private vehiculosActivos:any[]=[];
  private vehiculos:any[]=[];


  constructor( private http: Http) {

    this.http.get('http://localhost:8082/parqueadero/vehiculos').map((res:Response) => res.json())
    .subscribe(dataVehiculosActivos => {
      this.vehiculosActivos=dataVehiculosActivos;
      console.log(dataVehiculosActivos);
    });

    this.http.get('http://localhost:8082/vehiculos').map((respuesta:Response) => respuesta.json())
    .subscribe(dataVehiculos => {
      this.vehiculos=dataVehiculos;
      console.log(dataVehiculos);
    });

  }

  getVehiculos(){
      return this.vehiculos;
  }

  getVehiculo(index:number){
    this.vehiculos[index];
  }

  getVehiculosActivos(){
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
