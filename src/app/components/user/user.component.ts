import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { first, map, Observable, Subject } from 'rxjs';
import { User } from '../../models/user.interface';
import { SessionService } from '../../services/session.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  public userInfo$: Subject<User>;

  constructor(private session: SessionService, public router: Router) {
    this.userInfo$ = session.getUserInfo();
    
  }

  public getImage$(): Observable<string> {


    return this.userInfo$.pipe(first(), map(u => u.images != null && u.images.length>0? u.images[0].url:""))
  }


  public logOut(): void {
    window.location.search == null && window.location.search == "";
    this.router.navigate(['home'])
    this.session == null;
    this.userInfo$ == null;
  }
}
