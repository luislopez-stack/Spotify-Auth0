import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SpotifyService } from '../../services/spotify.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent {

  nuevasCanciones: any[] = [];
  loading: boolean;

  constructor( private spotify: SpotifyService, private auth : AuthService) {

    this.loading = true;

    this.spotify.getNewReleases().subscribe( (data:any) => {
      console.log(data);
      this.nuevasCanciones = data;
      this.loading = false;
    });

   }


}
