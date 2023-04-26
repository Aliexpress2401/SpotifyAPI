import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { AccessToken } from '../models/access-token.interface';
import { Albums } from '../models/album.interface';
import { Playlists } from '../models/playlist.interface';
import { Podcast } from '../models/podcast.interface';
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

  //FA LA RICHIESTA PER GLI ALBUM
  public getUserAlbum(): Observable<Albums> {

    return this.http.get<Albums>('https://api.spotify.com/v1/me/albums')
  }

  //FA LA RICHIESTA DELLE PLAYLIST
  public getUserPlaylist(): Observable<Playlists> {

    return this.http.get<Playlists>('https://api.spotify.com/v1/me/playlists')
  }

  //FA LA RICHIESTA DEI PODCAST
  public getUserPodcast(): Observable<Podcast> {

    return this.http.get<Podcast>('https://api.spotify.com/v1/me/episodes')
  }

  //FA LA RICHIESTA DELLE CANZONI
  public getUserTrack(): Observable<Tracks> {

    return this.http.get<Tracks>('https://api.spotify.com/v1/me/tracks')
  }

}
