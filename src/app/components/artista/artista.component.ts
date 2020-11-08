import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: [
  ]
})
export class ArtistaComponent implements OnInit {

  artista: any[] = [];
  topTracks: any[] = [];
  loadingArtist:boolean;

  constructor(private actRoute:ActivatedRoute,
              private spotify:SpotifyService) {

    this.loadingArtist = true;
    this.actRoute.params.subscribe(params => {
      console.log(params['id']);

    this.getArtista(params['id']);
    this.getTopTracks(params['id']);
    })
   }

  ngOnInit(): void {
  }

  getArtista (id: string){
    this.loadingArtist = true;
    this.spotify.getArtista( id ).subscribe( (data:any) => {
      console.log(data);
      this.artista = data;
      this.loadingArtist = false;
    });
  }

  getTopTracks(id: string){
    this.spotify.getTopTracks( id ).subscribe( (data:any) => {
      console.log(data);
      this.topTracks = data;
    });
  }

}
