import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.sass']
})
export class UsuarioComponent implements OnInit {

  profileJson: string = null;


  nombre = "adress1@gmail.com Lorem ";
  nombre2 = 'JUaN lUis agUilAr lopEz';
  arreglo = [1,2,3,4,5,6,7,8,9,10];
  PI: number = Math.PI;
  porcentaje: number = 0.23456;
  salario: number = 12456.5;
  fecha: Date = new Date();
  idioma:string = 'en';
  videoUrl : string = 'https://www.youtube.com/embed/c0_ejQQcrwI';
  contrasena: boolean = true;
  heroe = {
    nombre: 'logan',
    clave: 'Wolverine',
    edad: 500,
    direccion:{
      calle: 'Washer',
      casa: 200
    }
  }

  valorPromesa = new Promise<string>( (resolve) => {

    setTimeout( () => {
      resolve('Llego la data despues de 5 seg');
    }, 5000);
  });


  constructor( public auth: AuthService ) { }

  ngOnInit(): void {


  }

}
