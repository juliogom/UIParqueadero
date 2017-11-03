export class Vehiculo {

  private nombre:string;
  private color:string;
  private modelo:number;
  private placa:string;

  constructor(nombre:string,color:string,modelo:number,placa:string) {
    this.nombre=nombre;
    this.color=color;
    this.modelo=modelo;
    this.placa=placa;
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

}
