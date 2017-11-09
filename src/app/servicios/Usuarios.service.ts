import { Injectable } from '@angular/core';
import { Http, Response,RequestOptions, Headers, URLSearchParams} from '@angular/http';


import 'rxjs/add/operator/map';
import {Usuario} from '../modelo/Usuario';

@Injectable()
export class UsuariosService{

  private usuariosHttp:any[];

  guardado:boolean;

  constructor(private http:Http){}

  get usuarios(){

    return this.http.get('http://localhost:8082/parqueadero/usuarios').map(respuesta => respuesta.json());
  }

  addUsuario(usuario:Usuario){

    let usuarioGuardado:Usuario=null;

    let myHeaders = new Headers();
    
	  myHeaders.append('Content-Type', 'application/json');

    let options = new RequestOptions({ headers: myHeaders});

    let obj=this.http.post('http://localhost:8082/parqueadero/usuarios/guardar',JSON.stringify(usuario),options).
      map(res=> res.json())
      .subscribe((respuesta:Usuario)=>{
        usuarioGuardado=respuesta;
      });

    if(obj !=null){
      return usuario;
    }else{
      return usuarioGuardado;
    }

  }

}
