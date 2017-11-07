import { Injectable } from '@angular/core';
import { Slot } from './Slot';
import { Vehiculo } from './Vehiculo';

@Injectable()
export class Actividad{

  private id:number;
  private estado:number;
  private fechaInicio:Date;
  private slot:Slot;
  private vehiculo:Vehiculo;
  private servicio:any;

  Actividad(id:number,estado:number,fechaInicio:Date,slot:Slot,vehiculo:Vehiculo,servicio:any){
    this.id=id;
    this.estado=estado;
    this.fechaInicio=fechaInicio;
    this.slot=slot;
    this.vehiculo=vehiculo;
    this.servicio=servicio;
  }

  getId():number{
    return this.id;
  }

  setId(id:number){
    this.id=id;
  }

  getEstado():number{
    return this.estado;
  }

  setEstado(estado:number){
    this.estado=estado;
  }

  getFechaInicio():Date{
    return this.fechaInicio;
  }

  setFechaInicio(fechaInicio:Date){
    this.fechaInicio=fechaInicio;
  }

  getSlot():Slot{
    return this.slot;
  }

  setSlot(slot:Slot){
    this.slot=slot;
  }

  getVehiculo():Vehiculo{
    return this.vehiculo;
  }

  setVehiculo(vehiculo:Vehiculo){
    this.vehiculo=vehiculo;
  }

  getServicio():any{
    return this.servicio;
  }

  setServicio(servicio:any){
    this.servicio=servicio;
  }


}
