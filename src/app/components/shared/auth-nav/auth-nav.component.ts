import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-auth-nav',
  templateUrl: './auth-nav.component.html',
  styles: [
  ]
})
export class AuthNavComponent implements OnInit {

  constructor( public auth : AuthService) { }

  ngOnInit(): void {
  }

}
