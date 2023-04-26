import { Type } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { ReplaySubject, Subject } from 'rxjs';
import { Albums } from '../models/album.interface';
import { User } from '../models/user.interface';

@Injectable()
export class SessionService {

  private _token: string | null;
  private _userInfo: ReplaySubject<User>;
  private _userAlbum: ReplaySubject<Albums>;

  constructor() {
    this._token = sessionStorage.getItem('token');
    this._userInfo = new ReplaySubject();
    this._userAlbum = new ReplaySubject();
  }

  //PRENDERE E SETTARE IL TOKEN
  public getToken(): string | null {
    return this._token;
  }

  public setToken(token: string | null): void {
    if (token == null) {
      sessionStorage.removeItem('token')
    } else {
      this._token = token;
      sessionStorage.setItem('token', token);
    }
  }

  //PRENDERE E SETTARE LE INFO DELL'UTENTE
  public getUserInfo(): ReplaySubject<User> {
    return this._userInfo;
  }

  public setUserInfo(userInfo: User): void {
    this._userInfo.next(userInfo);
  }

  //PRENDERE E SETTARE GLI ALBUM DELL'UTENTE
  public getUserAlbum(): ReplaySubject<Albums> {
    return this._userAlbum;
  }

  public setUserAlbum(userAlbum: Albums): void {
    this._userAlbum.next(userAlbum);
  }

}

