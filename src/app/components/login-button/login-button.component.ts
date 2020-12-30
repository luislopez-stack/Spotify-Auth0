import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-login-button',
  templateUrl: './login-button.component.html',
  styles: [
  ]
})
export class LoginButtonComponent implements OnInit {

  constructor( public auth : AuthService) { }

  ngOnInit(): void {
  }

  loginWithService(): void {
    this.auth.login();
  }
}
