import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-authentication-button',
  templateUrl: './authentication-button.component.html',
  styles: [
  ]
})
export class AuthenticationButtonComponent implements OnInit {

  constructor( public auth : AuthService) {


  }

  ngOnInit(): void {
  }


}
