import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class VehiculosService {

  private vehiculos:any[]=[];

  constructor( private http: Http) {

    this.http.get('http://localhost:8082/parqueadero/vehiculos').map((res:Response) => res.json())
    .subscribe(dataVehiculos => {
      this.vehiculos=dataVehiculos;
      console.log(dataVehiculos);
      //Console.log(this.vehiculos.vehiculo);
    });
  }

  getVehiculos(){
    return this.vehiculos;
  }

  getVehiculo(index:number){
    return this.vehiculos[index];
  }

}

export interface Vehiculo{
    id: number;
    nombre:string;
    modelo:number;
    placa: string;
    color:string;
}
