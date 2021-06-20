import { Component, OnInit, NgModule } from '@angular/core';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { PagoService } from '../../../services/pago.service';
import { pagoModel } from '../../../models/pagoModel';



@Component({
  selector: 'app-pago',
  templateUrl: './pago.component.html',
  styleUrls: ['./pago.component.sass']
})
export class PagoComponent implements OnInit {

  pago = new pagoModel

  constructor( private pagoService: PagoService,
                private route: ActivatedRoute ) { }

  ngOnInit(): void {

    const id = this.route.snapshot.paramMap.get('id');

    if( id !== 'nuevo'){
      this.pagoService.getPagoById( id ).subscribe( (rsp: pagoModel) => {
        this.pago = rsp;
        this.pago.id = id;
      })
    }

  }




  guardar( forma: NgForm){

    if (forma.invalid){
      return;
    }

    Swal.fire({
      icon: 'info',
      title: 'Espere...',
      text: 'Guardando!',
      allowOutsideClick: false
    });
    Swal.showLoading();

    let peticion: Observable<any>;

    if ( this.pago.id){
      peticion = this.pagoService.putPago( this.pago);
    }else{
      peticion = this.pagoService.postPago( this.pago);
    }

    peticion.subscribe( rsp => {

      Swal.fire({
        icon: 'success',
        title: this.pago.transaccion,
        text: 'Guardando!'
      });
    });

  }


}
