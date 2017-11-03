export class Usuario {

  private id:number;
  private nombre:string;
  private apellido:string;
  private cedula:string;
  private edad:number;
  private telefono:string;

  constructor(id:number,nombre:string,apellido:string,cedula:string,edad:number,telefono:string) {
    this.id=id;
    this.nombre=nombre;
    this.apellido=apellido;
    this.cedula=cedula;
    this.edad=edad;
    this.telefono=telefono;
  }

  public getId():number{
    return this.id;
  }

  public getNombre():string{
    return this.nombre;
  }

  public getApellido():string{
    return this.apellido;
  }

  public getCedula():string{
    return this.cedula;
  }

  public getEdad():number{
    return this.edad;
  }

  public getTelefono():string{
    return this.telefono;
  }

}
