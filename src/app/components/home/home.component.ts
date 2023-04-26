import { Component } from '@angular/core';
import { environment } from '../../../environments/environment';
import { SessionService } from '../../services/session.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor() {
    
  }

  public loginButton(): void {

      window.location.href = 'https://accounts.spotify.com/authorize?' +
        `response_type=code&client_id=${environment.client_id}&scope=${environment.scope}&redirect_uri=${environment.redirect_uri}`
  }


}


