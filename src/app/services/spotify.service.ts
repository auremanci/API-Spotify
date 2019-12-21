import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient ) {
    console.log('Servicio de spotify listo!!');
   }

   getNewReleases() {

     const headers = new HttpHeaders({
       'Authorization': 'Bearer BQCQHkBM7vEJcgVgSYMcTSJuB7MA4bfEiuA-6qhfRVV8djM1Ifj0s8e3zaXdswcL2FPewMK_B6CU305hgjo?limit=20'
     });

     this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers }).
     subscribe( resp =>{
       console.log( resp );
     });

   }
}
