import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuariosComponent } from './usuarios.component';
import { app_routing } from '../../app.routes';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {APP_BASE_HREF} from '@angular/common';

import {HomeComponent} from '../home/home.component';
import { VehiculosComponent } from '../vehiculos/vehiculos.component';
import { VehiculoComponent } from '../vehiculo/vehiculo.component';
import { UsuarioComponent } from '../usuario/usuario.component';
import { NuevoUsuarioComponent } from '../usuario/nuevo-usuario/nuevo-usuario.component';
import { FooterComponent } from '../../footer/footer.component';

describe('UsuariosComponent', () => {
  let component: UsuariosComponent;
  let fixture: ComponentFixture<UsuariosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsuariosComponent,HomeComponent,VehiculosComponent,VehiculoComponent,UsuarioComponent,NuevoUsuarioComponent,FooterComponent],
      imports: [
        app_routing,FormsModule,ReactiveFormsModule
      ],
      providers:[
        { provide: APP_BASE_HREF, useValue : '/' }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
