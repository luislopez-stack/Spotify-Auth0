import { renderFlagCheckIfStmt } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-callback-auth',
  templateUrl: './callback-auth.component.html',
  styleUrls: ['./callback-auth.component.sass']
})
export class CallbackAuthComponent implements OnInit {

  constructor(private auth : AuthService) { }

  ngOnInit() {
    this.auth.handleAuthCallback();
  }

}
