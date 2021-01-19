import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasenapipe'
})
export class ContrasenapipePipe implements PipeTransform {

  transform(value: string, mostrar: boolean = false): string {

    return ( mostrar ) ? '*'.repeat( value.length ) : value;
  }

}
