
export class TipoVehiculo{

  private id:number;
  private nombre:string;
  private descripcion:string;

  public TipoVehiculo(id:number,descripcion:string,nombre:string){
    this.id=id;
    this.descripcion=descripcion;
    this.nombre=nombre;
  }

  getId():number
  {
      return this.id;
  }

  setId(id:number){
    this.id=id;
  }

  getNombre():string
  {
      return this.nombre;
  }

  setNombre(nombre:string){
    this.nombre=nombre;
  }

  getDescripcion():string{
    return this.descripcion;
  }

  setDescripcion(descripcion:string){
    this.descripcion=descripcion;
  }

}
