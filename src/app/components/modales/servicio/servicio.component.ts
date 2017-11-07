import { Component,Input, OnInit} from '@angular/core';
import { Injectable } from '@angular/core';
import { ModalService } from '../../../servicios/modal.service';
import {FormGroup,FormControl,Validators} from '@angular/forms';
import { Vehiculo } from '../../../modelo/Vehiculo'
import { Usuario } from '../../../modelo/Usuario'
import { UsuariosService } from '../../../servicios/Usuarios.service'
import { VehiculosService } from '../../../servicios/vehiculos.service';
import { SlotService } from '../../../servicios/Slot.service';
import {Actividad} from '../../../modelo/Actividad';
import {Slot} from '../../../modelo/Slot';

@Component({
  selector: 'app-servicio',
  templateUrl: './servicio.component.html',
    providers: [UsuariosService,SlotService],
    styleUrls: ['./servicio.component.css']
})

export class ServicioComponent implements OnInit {

  private forma:FormGroup;

  public usuarios:Usuario[];
  public queryBuscador:string;
  public queryVehiculos:string;
  public filteredList:any[];
  public btnCrearNuevoUsuario:boolean=true;
  public btnCrearVehiculo:boolean=true;
  public vehiculos:Vehiculo[];
  public filteredListVehiculos:any[];

  public slots:Slot[];
  public slotstipo:Slot[];

  abierto=false;

  public actividad:Actividad;

  constructor(public servicioModal:ModalService,public servicioUsuarios:UsuariosService,
    public servicioVehiculos:VehiculosService, servicioSlot:SlotService) {
    this.filteredList=[];
    this.filteredListVehiculos=[];
    this.btnCrearNuevoUsuario=true;
    this.slots=[];
    this.slotstipo=[];
    this.actividad=new Actividad();

    this.forma =new FormGroup({
      'usuario':new FormControl('',Validators.required),
      'vehiculo':new FormControl('',Validators.required),
      'horaEntrada':new FormControl('',Validators.required)
    });

  servicioUsuarios.usuarios.subscribe(usuarios=> this.usuarios = usuarios);
  servicioVehiculos.getVehiculos().subscribe(dataVehiculos => this.vehiculos=dataVehiculos);
  servicioSlot.slots.subscribe(dataSlots => this.slots=dataSlots);

  }

  ngOnInit() {
    this.servicioModal.registrarModal(this,0);
    this.slotstipo=this.slots;
    //this.filteredList = this.usuarios;
  }

  filter() {
    if (this.queryBuscador !== ""){
        this.filteredList = this.usuarios.filter(function(el){

            if(el.nombre.toLowerCase().indexOf(this.queryBuscador.toLowerCase()) == -1){
              this.btnCrearNuevoUsuario=false;
            }
            return el.cedula.toLowerCase().indexOf(this.queryBuscador.toLowerCase()) > -1;
        }.bind(this));
    }else{
        this.filteredList = [];
    }
}


filterVehiculos() {
  if (this.queryVehiculos !== ""){
      this.filteredListVehiculos = this.vehiculos.filter(function(el){

          if(el.nombre.toLowerCase().indexOf(this.queryVehiculos.toLowerCase()) == -1){
            this.btnCrearVehiculo=false;
          }
          return el.placa.toLowerCase().indexOf(this.queryVehiculos.toLowerCase()) > -1;

      }.bind(this));
  }else{
      this.filteredListVehiculos = [];
  }
}

select(item){
    this.queryBuscador = item.nombre;
    this.filteredList = [];
    this.btnCrearNuevoUsuario=true;

    //console.log(this.forma['usuario']);
}

selectVehiculo(item){
  this.queryVehiculos=item.nombre;
  this.filteredListVehiculos=[];
  this.btnCrearVehiculo=true;
  this.actividad.setVehiculo(item);

  this.slotstipo=this.slots.filter(function(el){
    //console.log(this.actividad.getVehiculo().tipoVehiculo.id);
    //console.log(el.tipoVehiculo.id);
      return el.tipoVehiculo.id == this.actividad.getVehiculo().tipoVehiculo.id;

  }.bind(this));

}

close(abierto = false): void {
   //this.servicioModal.close(this.modalId, checkBlocking);
 }

 getFont(slot){
    if(slot.ocupado){
      return 'green';
    }else{
      return 'red';
    }
 }

 guardarEntrada(){
   console.log(this.actividad);
   console.log(this.slots);
 }

}
