import {TipoVehiculo} from './TipoVehiculo';
import { Usuario } from './Usuario'

export class Vehiculo {

  private id:number;
  private nombre:string;
  private color:string;
  private modelo:number;
  private placa:string;
  private cilindraje:number;
  private tipoVehiculo:TipoVehiculo;
  private cliente:Usuario;

  constructor(id:number,nombre:string,color:string,modelo:number,placa:string,cilindraje:number,tipoVehiculo:TipoVehiculo,usuario:Usuario) {
    this.nombre=nombre;
    this.color=color;
    this.modelo=modelo;
    this.placa=placa;
    this.tipoVehiculo=tipoVehiculo;
    this.cliente=usuario;
    this.cilindraje=cilindraje;
    this.id=id;
  }

  public getId():number{
    return this.id;
  }

  public setId(id:number){
    this.id=id;
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

  getCilindraje():number{
    return this.cilindraje;
  }

  setCilindraje(cilindraje:number){
    this.cilindraje=cilindraje;
  }


}
