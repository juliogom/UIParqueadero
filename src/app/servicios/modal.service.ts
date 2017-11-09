import { Injectable } from '@angular/core';
import { ServicioComponent } from '../components/modales/servicio/servicio.component';

@Injectable()
export class ModalService {

  private modales: Array<ServicioComponent>;

  constructor() {
    this.modales=[];
  }

abrirModal(id:number){
    const modal=this.buscarModal(id);

    if(modal){
      modal.abierto=true;
    }
}

registrarModal(modal:ServicioComponent,id:number){
  const modalAuxiliar=this.buscarModal(id);
  console.log(modal);
  if(modalAuxiliar){
    this.modales.splice(this.modales.indexOf(modalAuxiliar));
  }
  this.modales.push(modal);
}

buscarModal(id:number){
  return this.modales[id];
}

cerrarrModal(id:number){
    const modal=this.buscarModal(id);

    if(modal){
      modal.abierto=false;
    }
}




}
