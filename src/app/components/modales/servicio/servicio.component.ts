import { Component,Input, OnInit} from '@angular/core';
import { Injectable } from '@angular/core';
import { ModalService } from '../../../servicios/modal.service';
import {FormGroup,FormControl,Validators} from '@angular/forms';
import { Vehiculo } from '../../../modelo/Vehiculo'
import { Usuario } from '../../../modelo/Usuario'

@Component({
  selector: 'app-servicio',
  templateUrl: './servicio.component.html'
})

@Injectable()
export class ServicioComponent implements OnInit {

  private forma:FormGroup;

  actividad:any={
    cliente:Usuario,
    vehiculo:Vehiculo,
    horaEntrada:new Date()
  }

  modalId: string;
  modalTitulo: string;
  blocking = false;
  abierto = false;

  constructor(public servicioModal:ModalService) {

    this.forma =new FormGroup({
      'usuario':new FormControl('',Validators.required),
      'vehiculo':new FormControl('',Validators.required),
      'horaEntrada':new FormControl('',Validators.required)
    });

  }

  ngOnInit() {
    this.servicioModal.registrarModal(this,0);
  }

  close(abierto = false): void {
   //this.servicioModal.close(this.modalId, checkBlocking);
 }


}
