import { Component, OnInit } from '@angular/core';
import {  Track } from '../../models/tracks.interface';
import { RepositoryService } from '../../services/repository.service';

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.scss']
})
export class TrackComponent implements OnInit {
  tracks: any

  constructor(private repository: RepositoryService) {

  }

  ngOnInit() {
    this.repository.getUserTrack().subscribe(tracks => { this.tracks = tracks })
  }

  public getImage(track: Track): string {

    return track.track.album.images?.find(image => image.height == 64)?.url ?? ""
  }

  public getArtist(track: Track): string {

    return track.track.artists?.map(artist => artist.name).join(",") ?? ""
  }

}
