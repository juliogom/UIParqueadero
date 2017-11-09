import { Component } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms';
import { Vehiculo } from '../../../modelo/Vehiculo';
import { VehiculosService } from '../../../servicios/vehiculos.service';
import { UsuariosService } from '../../../servicios/Usuarios.service';
import { TipoVehiculo } from '../../../modelo/TipoVehiculo';
import { Usuario } from '../../../modelo/Usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nuevo-vehiculo',
  templateUrl: './nuevo-vehiculo.component.html'
})
export class NuevoVehiculoComponent{

  formaVehiculo:FormGroup;
  vehiculo:Vehiculo;
  usuarios:Usuario[];
  usuarioSeleccionado:Usuario;
  usuariosFiltrados:Usuario[];
  tiposVehiculos:TipoVehiculo[];
  crearUsuario:boolean=true;

  constructor(private servicioVehiculos:VehiculosService,private servicioUsuarios:UsuariosService,
              private _router:Router) {
    this.tiposVehiculos=[];
    this.usuarios=[];
    this.vehiculo=new Vehiculo(null,null,null,null,null,null,null,null);
    this.usuarioSeleccionado=new Usuario(null,null,null,null,null,null);

    servicioVehiculos.getTiposVehiculos().subscribe(dataTipos => {
      this.tiposVehiculos=dataTipos;
    });

    servicioUsuarios.usuarios.subscribe( dataUsuarios=>{
      this.usuarios=dataUsuarios;
    });

    this.formaVehiculo=new FormGroup({
      'id':new FormControl(''),
      'nombre':new FormControl('',Validators.required),
      'modelo':new FormControl('',Validators.required),
      'placa':new FormControl('',Validators.required),
      'color':new FormControl('',Validators.required),
      'tipoVehiculo':new FormControl('',Validators.required),
      'cilindraje':new FormControl('',Validators.required),
      'cliente': new FormControl('',Validators.required)
    });

    this.formaVehiculo.setValue(this.vehiculo);
    this.usuariosFiltrados=this.usuarios;
   }

   filtroUsuario(){

     if(this.formaVehiculo.value.cliente != ""){

       this.usuariosFiltrados=this.usuarios.filter(function(el){
          let filtro=el.cedula.toLowerCase().indexOf(this.formaVehiculo.value.cliente.toLowerCase());

          if(filtro == -1){
            this.crearUsuario=false;
          }

          return  filtro > -1;

       }.bind(this));

     }else{
       this.usuariosFiltrados=[];
     }

   }

  seleccionarUsuario(usuario){
    this.usuarioSeleccionado=usuario;
    this.formaVehiculo.value.cliente=usuario;

    this.vehiculo.setCliente(usuario);

    this.usuariosFiltrados=[];
    this.crearUsuario=true;
   }

  guardarVehiculo(){

    let usuario:Usuario=this.formaVehiculo.value.cliente;

    console.log(this.formaVehiculo.value);

    if(this.formaVehiculo.valid){

      if(this.servicioVehiculos.guardarVehiculo(this.vehiculo)){
        alert("Vehiculo " + this.formaVehiculo.value.nombre + " guardado exitosamente");
        this._router.navigate(['vehiculos']);
      }

    }else{
        alert("Completa todos los campos");
    }

  }

  seleccionarTipoVehiculo(tipoVehiculo){
    this.formaVehiculo.value.tipoVehiculo=tipoVehiculo;
    this.vehiculo.setTipoVehiculo(tipoVehiculo);
    //this.vehiculo.setTipoVehiculo(tipoVehiculo);
  }

  llamarCrearUsuario(){
    this._router.navigate(['usuarios/nuevo-usuario']);
  }


}
