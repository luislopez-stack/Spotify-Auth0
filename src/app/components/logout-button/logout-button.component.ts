import { Component, Inject, OnInit } from '@angular/core';

import { DOCUMENT }  from '@angular/common';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-logout-button',
  templateUrl: './logout-button.component.html',
  styles: [
  ]
})
export class LogoutButtonComponent implements OnInit {

  constructor( public auth : AuthService, @Inject(DOCUMENT) private doc: Document ) { }

  ngOnInit(): void {
  }

  logOutWithService(){
    this.auth.logout();
    //this.auth.logout({ returnTo: this.doc.location.origin});
  }
}
