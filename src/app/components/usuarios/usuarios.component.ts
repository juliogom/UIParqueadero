import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {UsuariosService} from '../../servicios/Usuarios.service';
import {Usuario} from '../../modelo/Usuario';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  providers:[UsuariosService]
})
export class UsuariosComponent implements OnInit {

  usuarios:Usuario[];

  constructor(private _router:Router,private servicioUsuario:UsuariosService) { }

  ngOnInit() {

    this.servicioUsuario.usuarios.subscribe(usuarios=>
      {this.usuarios=usuarios;
      });

  }

  crearUsuario(){
    this._router.navigate(['usuarios/nuevo-usuario']);
  }


}
