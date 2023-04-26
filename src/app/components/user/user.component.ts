import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { User } from '../../models/user.interface';
import { SessionService } from '../../services/session.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  public userInfo$: Subject<User>;

  constructor(private session: SessionService) {
    this.userInfo$ = session.getUserInfo();
    
  }

}
