import {TipoVehiculo} from './TipoVehiculo';
import { Usuario } from './Usuario'

export class Vehiculo {

  private nombre:string;
  private color:string;
  private modelo:number;
  private placa:string;
  private tipoVehiculo:TipoVehiculo;
  private cliente:Usuario;

  constructor(nombre:string,color:string,modelo:number,placa:string,tipoVehiculo:TipoVehiculo,usuario:Usuario) {
    this.nombre=nombre;
    this.color=color;
    this.modelo=modelo;
    this.placa=placa;
    this.tipoVehiculo=tipoVehiculo;
    this.cliente=usuario;
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

  getCliente():Usuario{
    return this.cliente;
  }

  setCliente(cliente:Usuario){
    this.cliente=cliente;
  }
}
