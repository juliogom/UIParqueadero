import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SlotService{

  private slotshttp:any[];

  constructor(private http:Http){ }

  get slots(){

    return this.http.get('http://localhost:8082/parqueadero/slots').map(respuesta => respuesta.json());

  }

}
