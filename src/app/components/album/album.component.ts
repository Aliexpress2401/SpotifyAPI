import { Component, OnInit } from '@angular/core';
import { Album } from '../../models/album.interface';
import { RepositoryService } from '../../services/repository.service';


@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})


export class AlbumComponent implements OnInit {

    albums: any;

  constructor(private repository: RepositoryService) {

  }

  ngOnInit() {
    this.repository.getUserAlbum().subscribe(albums => { this.albums = albums })
  }

  public getImage(album: Album): string {

    return album.album.images?.find(image => image.height==64)?.url ?? ""
  }

  public getArtist(album: Album): string {

    return album.album.artists?.find(artist => artist.name)?.name ?? ""
  }
}


