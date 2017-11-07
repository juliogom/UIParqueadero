import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UsuariosService{

  private usuariosHttp:any[];

  constructor(private http:Http){ }

  get usuarios(){

    return this.http.get('http://localhost:8082/parqueadero/usuarios').map(respuesta => respuesta.json());
     //this.usuarios;
  }

}
