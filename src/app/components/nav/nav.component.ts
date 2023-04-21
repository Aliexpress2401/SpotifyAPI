import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import { User } from '../../models/user.interface';
import { SessionService } from '../../services/session.service';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  
})
export class NavComponent implements OnInit{

  public userInfo$: Subject<User>;

  constructor(private session: SessionService) {
    this.userInfo$ = session.getUserInfo();
  }

  ngOnInit(): void {

  }


}
