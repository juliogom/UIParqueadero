
import {TipoVehiculo} from './TipoVehiculo';

export class Slot{

  private id:number;
  private numero:number;
  private ocupado:boolean;
  private tipoVehiculo:TipoVehiculo;

  public Slot(id:number,numero:number,ocupado:boolean,tipoVehiculo:TipoVehiculo)
  {
    this.id=id;
    this.numero=numero;
    this.ocupado=ocupado;
    this.tipoVehiculo=tipoVehiculo;
  }

  getId():number{
    return this.id;
  }

  setId(id:number){
    this.id=id;
  }

  getNumero():number{
    return this.numero;
  }

  setNumero(numero:number){
    this.numero=numero;
  }

  getOcupado(){
    return this.ocupado;
  }

  setOcupado(ocupado:boolean){
    this.ocupado=ocupado;
  }

  getTipoVehiculo():TipoVehiculo{
    return this.tipoVehiculo;
  }

  setTipoVehiculo(tipoVehiculo:TipoVehiculo){
    this.tipoVehiculo=tipoVehiculo;
  }
  
}
