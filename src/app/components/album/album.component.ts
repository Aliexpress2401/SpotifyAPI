import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { Albums } from '../../models/album.interface';
import { SessionService } from '../../services/session.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent {
  public userAlbum$: Subject<Albums>;

  constructor(private session: SessionService) {
    this.userAlbum$ = session.getUserAlbum();

  }
}
