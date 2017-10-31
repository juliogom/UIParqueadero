import { Component } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms';

@Component({
  selector: 'app-nuevo-usuario',
  templateUrl: './nuevo-usuario.component.html'
})
export class NuevoUsuarioComponent {

  forma:FormGroup;

  usuario:any={
    nombre:"",
    apellido:"",
    cedula:"",
    edad:"",
    telefono:""
  }



  constructor() {

    this.forma =new FormGroup({
      'nombre':new FormControl('',Validators.required),
      'apellido':new FormControl('',Validators.required),
      'cedula':new FormControl('',Validators.required),
      'edad':new FormControl('',Validators.required),
      'telefono':new FormControl('',Validators.required)
    });

    this.forma.setValue(this.usuario);

  }

  guardarUsuario(){
    console.log(this.forma.value);
    }

}
