import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient ) {}

  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${ query }`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQARm2aZCWPhiCtmd4KFtam5UVStE-7cd6iIBMkdmWq_yqFM5DiVhhG86LbYApiRcBOOhbaTzgXic2jOhQU?limit=20'
    });

    return this.http.get(url, { headers });
  }

   getNewReleases() {

     return this.getQuery('browse/new-releases')
            .pipe(map((data: any) => data.albums.items));

   }

   getArtista( termino: string ) {

     return this.getQuery(`search?query=${ termino }&type=artist&offset=0&limit=15`)
            .pipe(map((data: any) => data.artists.items));

   }
}
