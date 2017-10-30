import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class VehiculosService {

  private vehiculos:Vehiculo []=[
    { id: 1,
    	nombre:"FERR",
    	modelo:2016,
    	placa:"AHZ-116",
    	color:"Rojo",
    },
    { id: 2,
    	nombre:"Mazda",
    	modelo:2016,
    	placa:"R3F-116",
    	color:"Azul",
    },
    { id: 3,
    	nombre:"Toyota",
    	modelo:2017,
    	placa:"ATR-576",
    	color:"Gris",
    }
  ];

  constructor( private http: Http) {
    console.log('Servicio losto para usar');
  }

  getVehiculos():Vehiculo[]{
    return this.vehiculos;
  }

  getPrueba(){
        return this.http.get('http://localhost:8082/parqueadero/vehiculos').map((res:Response) => res.json());
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
