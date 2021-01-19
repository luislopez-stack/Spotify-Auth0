import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Pipe({
  name: 'pipesdomseguro'
})
export class PipesdomseguroPipe implements PipeTransform {

  constructor( private domSanatizer: DomSanitizer ){}

  transform(value: string, ...args: unknown[]): SafeResourceUrl {
    return this.domSanatizer.bypassSecurityTrustResourceUrl( value );
  }

}
