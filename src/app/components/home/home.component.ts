import { Component, OnInit } from '@angular/core';
import {VehiculosService} from '../../servicios/vehiculos.service';
import { ModalService } from '../../servicios/modal.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})

export class HomeComponent implements OnInit {

  actividades:any []=[];

  modalId:number=0;

  constructor(private _vehiculosActivos:VehiculosService,private _servicioModal:ModalService) { }

  ngOnInit() {
    this.actividades=this._vehiculosActivos.getVehiculosActivos();
  }

cargarNuevoServicio(){
  //this._servicioModal.abrirModal(this.modalId);
}


}
