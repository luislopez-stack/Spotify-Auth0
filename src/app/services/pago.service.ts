import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { pagoModel } from '../models/pagoModel';
import { map, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PagoService {

  private url = 'https://crudrppcrd-default-rtdb.firebaseio.com'; //https://crudrppcrd-default-rtdb.firebaseio.com/pagos

  constructor( private http: HttpClient) { }




  postPago( pago: pagoModel){

    return this.http.post(`${ this.url }/pagos.json`, pago)
            .pipe(
              map( (rsp: any) => {
                pago.id = rsp.name;
                return pago;
              })
            );
  }

  putPago( pago: pagoModel){

    const camposPago = {
      ...pago
    };

    delete camposPago.id;

    return this.http.put(`${ this.url }/pagos/${ pago.id }.json`, camposPago);
  }


  deletePagoById( id: string){
    return this.http.delete(`${ this.url }/pagos/${ id }.json`);
  }


  getPagoById( id: string){
    return this.http.get(`${ this.url }/pagos/${ id }.json`);
  }

  getPagos( ){

    return this.http.get(`${ this.url }/pagos.json`)
            .pipe(
              map( rsp => this.crearArregloPagos(rsp)),
              delay(1500)
            );
  }


  private crearArregloPagos (PagosObj: object){
    const pagos: pagoModel[] = [];
    console.log(PagosObj);

    if( PagosObj === null ){ return [];}

    Object.keys( PagosObj ).forEach( key => {
      const pago: pagoModel = PagosObj[key];
      pago.id = key;

      pagos.push(pago);

    });
    return pagos;
  }





}
