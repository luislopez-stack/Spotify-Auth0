import { Component, OnInit } from '@angular/core';
import { timestamp } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { PagoService } from '../../../services/pago.service';
import { pagoModel } from 'src/app/models/pagoModel';


@Component({
  selector: 'app-pagos',
  templateUrl: './pagos.component.html',
  styleUrls: ['./pagos.component.sass']
})
export class PagosComponent implements OnInit {

  pagos: pagoModel[] = [];
  cargando = false;

  constructor( private pagoService: PagoService) { }

  ngOnInit(): void {

    this.cargando = true;

    this.pagoService.getPagos()
    .subscribe( rsp => {
      console.log(rsp);
      this.pagos = rsp;
      this.cargando = false;
    });

  }


  deleteNota( pago  : pagoModel, i: number ){

    Swal.fire({
      icon: 'question',
      title: 'Quieres borrar nota?',
      text: `Quieres borrar nota ${ pago.transaccion }?`,
      showConfirmButton: true,
      showCancelButton: true
    }).then( resp =>{
      if (resp.value) {
        this.pagos.splice(i,1);
        this.pagoService.deletePagoById( pago.id ).subscribe();
      }
    });


  }


}
