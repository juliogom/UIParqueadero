import { Component,Input, OnInit} from '@angular/core';
import { Injectable } from '@angular/core';
import { ModalService } from '../../../servicios/modal.service';
import {FormGroup,FormControl,Validators} from '@angular/forms';
import { NguiDatetimePickerModule, NguiDatetime } from '@ngui/datetime-picker';

import { Vehiculo } from '../../../modelo/Vehiculo'
import { Usuario } from '../../../modelo/Usuario'
import { UsuariosService } from '../../../servicios/Usuarios.service'
import { VehiculosService } from '../../../servicios/vehiculos.service';
import { SlotService } from '../../../servicios/Slot.service';
import {Actividad} from '../../../modelo/Actividad';
import {Slot} from '../../../modelo/Slot';
import { Router } from '@angular/router';

@Component({
  selector: 'app-servicio',
  templateUrl: './servicio.component.html',
    providers: [UsuariosService,SlotService],
    styleUrls: ['./servicio.component.css']
})

export class ServicioComponent implements OnInit {

  public forma:FormGroup;

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
  public usuarioServicio:Usuario;

  servicioGenerico:any;

  date2:Date ;

  constructor(public servicioModal:ModalService,public servicioUsuarios:UsuariosService,
    public servicioVehiculos:VehiculosService, servicioSlot:SlotService,private _router:Router) {
    this.filteredList=[];
    this.filteredListVehiculos=[];
    this.btnCrearNuevoUsuario=true;
    this.btnCrearVehiculo=true;
    this.slots=[];
    this.slotstipo=[];
    this.actividad=new Actividad();
    this.usuarioServicio=null;
    this.servicioGenerico={id:0,detalle:"",nombre:"",precio:0};
    this.date2=new Date("Thu Jan 01 2015 00:00:00 GMT-0500 (EST)");

    this.forma =new FormGroup({
      'usuario':new FormControl('',Validators.required),
      'vehiculo':new FormControl('',Validators.required),
      'horaEntrada':new FormControl('',Validators.required),
      'fecha': new FormControl(this.date2)
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

            let usuarioEncontrado=el.cedula.toLowerCase().indexOf(this.queryBuscador.toLowerCase());

            if( usuarioEncontrado == -1){
              this.btnCrearNuevoUsuario=false;
            }
            return usuarioEncontrado > -1;
        }.bind(this));
    }else{
        this.filteredList = [];
    }
}


filterVehiculos() {
  if (this.queryVehiculos !== ""){
        this.filteredListVehiculos = this.vehiculos.filter(function(el){

            let vehiculoEncontrado=el.nombre.toLowerCase().indexOf(this.queryVehiculos.toLowerCase());

            if( vehiculoEncontrado == -1){
              this.btnCrearVehiculo=false;
            }
            return vehiculoEncontrado > -1;

        }.bind(this));
  }else{
      this.filteredListVehiculos = [];
      this.btnCrearVehiculo=true;
  }
}

select(item){
    this.queryBuscador = item.nombre;
    this.filteredList = [];
    this.btnCrearNuevoUsuario=true;

    this.usuarioServicio=item;
    //console.log(this.forma['usuario']);
}

selectVehiculo(item){

  this.queryVehiculos=item.nombre;
  this.filteredListVehiculos=[];
  this.btnCrearVehiculo=true;

  //item.setCliente(this.usuarioServicio);
  item.cliente=this.usuarioServicio;

  if(item.tipoVehiculo.id == 1){
    this.servicioGenerico={id:1,datalle:"SERVICIO PARQUEO CARRO",nombre:"PARQUEO CARRO",preio:1000};
  }else{
    this.servicioGenerico={id:2,datalle:"SERVICIO PARQUEO MOTO",nombre:"PARQUEO MOTO",preio:500};
  }

  this.actividad.setVehiculo(item);
  this.actividad.setServicio(this.servicioGenerico);

  this.slotstipo=this.slots.filter(function(el){

    return el.tipoVehiculo.id == this.actividad.getVehiculo().tipoVehiculo.id;

  }.bind(this));

}

close(abierto = false): void {
  this.actividad=null;
   //this.servicioModal.close(this.modalId, checkBlocking);
 }

 getFont(slot){
    if(slot.ocupado){
      return 'green';
    }else{
      return 'red';
    }
 }

 seleccionarSlot(tiposlot){
   this.actividad.setSlot(tiposlot);
 }

 MostrarCrearUsuario(){
   this._router.navigate(['usuarios/nuevo-usuario']);
 }

MostrarCrearVehiculo(){

  this._router.navigate(['vehiculos/nuevo-vehiculo']);
}


 guardarEntrada(){

   this.actividad.setFechaInicio(this.date2);
   //this.actividad.vehiculo.setCliente(this.actividad.cliente);
   console.log(this.actividad);

 }

}
