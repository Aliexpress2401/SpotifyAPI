import { Component, OnInit } from '@angular/core';
import { Playlist } from '../../models/playlist.interface';
import { RepositoryService } from '../../services/repository.service';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.scss']
})
export class PlaylistComponent implements OnInit {

  playlists: any;

  constructor(private repository: RepositoryService) {

  }

  ngOnInit() {
    this.repository.getUserPlaylist().subscribe(playlists => { this.playlists = playlists })
  }

  public getImage(playlist: Playlist): string {

    return playlist.images?.find(image => image.url != null)?.url ?? ""
  }
}
