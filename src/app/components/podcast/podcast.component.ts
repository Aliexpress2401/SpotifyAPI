import { Component, OnInit } from '@angular/core';
import { Episode } from '../../models/podcast.interface';
import { RepositoryService } from '../../services/repository.service';

@Component({
  selector: 'app-podcast',
  templateUrl: './podcast.component.html',
  styleUrls: ['./podcast.component.scss']
})
export class PodcastComponent implements OnInit {

  episodes: any;

  constructor(private repository: RepositoryService) { }

  ngOnInit() {
    this.repository.getUserPodcast().subscribe(episodes => { this.episodes = episodes })
  }

  public getImage(episode: Episode): string {

    return episode.episode.images?.find(image => image.height == 64)?.url ?? ""
  }

}
