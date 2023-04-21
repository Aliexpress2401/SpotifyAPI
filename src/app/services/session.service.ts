import { Type } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { ReplaySubject, Subject } from 'rxjs';
import { User } from '../models/user.interface';

@Injectable()
export class SessionService {

  private _token: string | null;
  private _userInfo: ReplaySubject<User>;
 

  constructor() {
    this._token = sessionStorage.getItem('token');
    this._userInfo = new ReplaySubject();
    
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

 
}

