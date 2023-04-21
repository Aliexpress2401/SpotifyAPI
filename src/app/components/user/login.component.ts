import { AfterViewInit, Component } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';
import { RepositoryService } from '../../services/repository.service';
import { SessionService } from '../../services/session.service';

@Component({

  template: `
  
  `,
  styles: [`
    em { float:right; color:#E05C65; padding-left:10px; }
  `]
})



export class LoginComponent {

 
  constructor(private session: SessionService, private repository: RepositoryService, public router: Router) {

    if (window.location.search != null && window.location.search != "") {
      const code = window.location.search.substring(6);

      this.repository.getAccessToken(code).subscribe(data => {
        this.session.setToken(data.access_token)
        this.router.navigate(['dashboard']).then(() => { this.repository.getUserInfo().subscribe(userInfo => session.setUserInfo(userInfo)) })
      })
    }
  }


}
