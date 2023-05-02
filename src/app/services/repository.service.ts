import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { AccessToken } from '../models/access-token.interface';
import { Albums } from '../models/album.interface';
import { Playlists } from '../models/playlist.interface';
import { Episodes } from '../models/podcast.interface';
import { Tracks } from '../models/tracks.interface';
import { User } from '../models/user.interface';
import { SessionService } from './session.service';

@Injectable()

export class RepositoryService {

  constructor(private http: HttpClient, private session: SessionService) {
    
  }

  //GENERA L'ACCESS TOKEN
  public getAccessToken(code: string): Observable<AccessToken> {
    let formData = new HttpParams();
    formData = formData.set('code', code);
    formData = formData.set('grant_type', "authorization_code");
    formData = formData.set('redirect_uri', environment.redirect_uri);

    let params = new HttpHeaders();
    params = params.set('Authorization', `Basic ${btoa(environment.client_id + ":" + environment.client_secret)}`)
    //params.set('Content-Type', `application/x-www-form-urlencoded`)

    return this.http.post<AccessToken>('https://accounts.spotify.com/api/token', formData, { headers: params, withCredentials: true })
  }


  //FA LA RICHIESTA PER LE INFO DELL'UTENTE
  public getUserInfo(): Observable<User> {
    
    return this.http.get<User>('https://api.spotify.com/v1/me')
  }

  //'market': `
  //          "AD", "AE", "AG", "AL", "AM", "AO", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BJ", "BN", "BO", "BR", "BS", "BT",
  //          "BW", "BY", "BZ", "CA", "CD", "CG", "CH", "CI", "CL", "CM", "CO", "CR", "CV", "CW", "CY", "CZ", "DE", "DJ", "DK", "DM", "DO", "DZ", "EC", "EE",
  //          "EG", "ES", "ET", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU",
  //          "ID", "IE", "IL", "IN", "IQ", "IS", "IT", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK",
  //          "LR", "LS", "LT", "LU", "LV", "LY", "MA", "MC", "MD", "ME", "MG", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MU", "MV", "MW", "MX", "MY", "MZ",
  //          "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RO", "RS", "RW",
  //          "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TJ", "TL", "TN", "TO", "TR", "TT", "TV",
  //          "TW", "TZ", "UA", "UG", "US", "UY", "UZ", "VC", "VE", "VN", "VU", "WS", "XK", "ZA", "ZM", "ZW"
  //        `


  //FA LA RICHIESTA PER GLI ALBUM
  public getUserAlbum(): Observable<Albums> {
    
    return this.http.get <Albums>('https://api.spotify.com/v1/me/albums?limit=50&offset=0&market=IT')
  }

  //FA LA RICHIESTA DELLE PLAYLIST
  public getUserPlaylist(): Observable<Playlists> {

    return this.http.get<Playlists>('https://api.spotify.com/v1/me/playlists?limit=50&offset=0')
  }

  //FA LA RICHIESTA DEI PODCAST
  public getUserPodcast(): Observable<Episodes> {

    return this.http.get<Episodes>('https://api.spotify.com/v1/me/episodes?market=IT&limit=50&offset=0')
  }

  //FA LA RICHIESTA DELLE CANZONI
  public getUserTrack(): Observable<Tracks> {

    return this.http.get<Tracks>('https://api.spotify.com/v1/me/tracks?market=IT&limit=50&offset=0')
  }

}
