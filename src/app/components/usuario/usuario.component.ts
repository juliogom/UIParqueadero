import { Component } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html'
})

export class UsuarioComponent{

  forma:FormGroup;

  constructor() {

    this.forma =new FormGroup({
      'nombre':new FormControl('Julio'),
      'apellido':new FormControl('Julio'),
      'cedula':new FormControl('Julio'),
      'edad':new FormControl('Julio'),
      'telefono':new FormControl('Julio')
    });

  }


}
