import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoUsuarioComponent } from './nuevo-usuario.component';

import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {APP_BASE_HREF} from '@angular/common';

describe('NuevoUsuarioComponent', () => {
  let component: NuevoUsuarioComponent;
  let fixture: ComponentFixture<NuevoUsuarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuevoUsuarioComponent ],
      imports: [
        FormsModule,ReactiveFormsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
