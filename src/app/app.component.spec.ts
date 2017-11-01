import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/compartidos/navbar/navbar.component';
import { RouterModule, Routes } from '@angular/router';
import { app_routing } from './app.routes';

import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {APP_BASE_HREF} from '@angular/common';

import {HomeComponent} from './components/home/home.component';
import { VehiculosComponent } from './components/vehiculos/vehiculos.component';
import { VehiculoComponent } from './components/vehiculo/vehiculo.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { NuevoUsuarioComponent } from './components/usuario/nuevo-usuario/nuevo-usuario.component';
import { FooterComponent } from './footer/footer.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,NavbarComponent,
        HomeComponent,VehiculosComponent,VehiculoComponent,
        UsuariosComponent,UsuarioComponent,NuevoUsuarioComponent,
        FooterComponent
      ],
      imports: [
        app_routing,FormsModule,ReactiveFormsModule
      ],
      providers:[
        { provide: APP_BASE_HREF, useValue : '/' }
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('parqueadero App');
  }));

});
