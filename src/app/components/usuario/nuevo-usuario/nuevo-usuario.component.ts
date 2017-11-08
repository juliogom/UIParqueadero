import { Component } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms';
import {Usuario} from '../../../modelo/Usuario';
import {UsuariosService} from '../../../servicios/Usuarios.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nuevo-usuario',
  templateUrl: './nuevo-usuario.component.html',
  providers:[UsuariosService]
})
export class NuevoUsuarioComponent {

  forma:FormGroup;

  usuario:Usuario;

  constructor(private usuarioServicio:UsuariosService,private _router:Router) {

    this.usuario=new Usuario(null,null,null,null,null,null);
    this.forma =new FormGroup({
      'id':new FormControl(),
      'nombre':new FormControl('',Validators.required),
      'apellido':new FormControl('',Validators.required),
      'cedula':new FormControl('',Validators.required),
      'edad':new FormControl('',Validators.required),
      'telefono':new FormControl('',Validators.required)
    });

    this.forma.setValue(this.usuario);

  }

  guardarUsuario(){

    if(this.forma.valid){

      this.usuario=this.forma.value;
      if(this.usuarioServicio.addUsuario(this.usuario)){
        alert("Usuario guardado exitosamente");
        this._router.navigate(['usuarios']);
      }else{
        alert("Usuario no guardado satisfactoriamente");

      }
    }

  }

}
