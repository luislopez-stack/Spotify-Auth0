import { Component, OnInit } from '@angular/core';
//import { AuthService } from '@auth0/auth0-angular';
import { AuthService } from './services/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'spotiapp';

  constructor ( private auth : AuthService ) {

  }

  ngOnInit(){
   this.auth.localAuthSetup();
  }
}
