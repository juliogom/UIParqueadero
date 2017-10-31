import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html'
})
export class UsuariosComponent implements OnInit {

  constructor(private _router:Router) { }

  ngOnInit() {
  }

  crearUsuario(){
    this._router.navigate(['usuarios/nuevo-usuario']);
  }


}
