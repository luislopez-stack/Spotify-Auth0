import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private spotifyHttp: HttpClient) { }

  getQuery(query:string){
    const url = `https://api.spotify.com/v1/${ query }`;
    const headers = new HttpHeaders({
      'Authorization':'Bearer BQChvAqD5ZIGBdyB2N5xuLP0-imzYkYItiG1sMzrxsP1Je8HdxJ1CCQC_iwNuOYza6n6wHK0u4n_C-EGwO0'
    });

    return this.spotifyHttp.get( url, { headers });
  }

  getNewReleases(){

    return this.getQuery('browse/new-releases?limit=20')
                  .pipe( map ( data =>{
                    return data['albums'].items;
                  } ));
  }

  getArtistas(termino: string){

    return this.getQuery(`search?q=${ termino }&type=artist&market=es`)
                .pipe( map( data => data['artists'].items));

  }

  getArtista(id: string){

    return this.getQuery(`artists/${ id }`);
  }

  getTopTracks(id:string){
    return this.getQuery(`artists/${ id }/top-tracks?country=us`)
                .pipe( map( data => data['tracks']));
  }
}
