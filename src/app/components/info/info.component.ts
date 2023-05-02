import { Component, OnInit } from '@angular/core';
import { RepositoryService } from '../../services/repository.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {
  songs: any
  constructor(private repository: RepositoryService) { }

  ngOnInit() {

    /*this.repository.getTopSong().subscribe(songs => { this.songs = songs })*/
  }

  //public getArtist(song: TopSong): string {

  //  /*return song.artists?.find(artist => artist.name)?.name ?? ""*/

  //  return song
  //}
}
