import {TipoVehiculo} from './TipoVehiculo';

export class Vehiculo {

  private nombre:string;
  private color:string;
  private modelo:number;
  private placa:string;
  private tipoVehiculo:TipoVehiculo;

  constructor(nombre:string,color:string,modelo:number,placa:string,tipoVehiculo:TipoVehiculo) {
    this.nombre=nombre;
    this.color=color;
    this.modelo=modelo;
    this.placa=placa;
    this.tipoVehiculo=tipoVehiculo;
  }

  public getNombre():string{
    return this.nombre;
  }

  public getColor():string{
    return this.nombre;
  }

  public getModelo():number{
    return this.modelo;
  }

  public getPlaca():string{
    return this.placa;
  }

  getTipoVehiculo():TipoVehiculo{
    return this.tipoVehiculo;
  }

  setTipoVehiculo(tipoVehiculo:TipoVehiculo){
  this.tipoVehiculo=tipoVehiculo;
  }

}
