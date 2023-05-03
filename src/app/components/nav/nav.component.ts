import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { User } from '../../models/user.interface';
import { SessionService } from '../../services/session.service';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  
})
export class NavComponent {

  public userInfo$: Subject<User>;

  constructor(private session: SessionService, public router: Router) {
    this.userInfo$ = session.getUserInfo();
  }


  public logOut(): void {
    window.location.search == null && window.location.search == "";
    this.router.navigate(['home'])
  }

}
