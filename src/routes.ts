import { Routes } from "@angular/router";
import { AlbumComponent } from "./app/components/album/album.component";
import { DashboardComponent } from "./app/components/dashboard/dashboard.component";
import { HomeComponent } from "./app/components/home/home.component";
import { PlaylistComponent } from "./app/components/playlist/playlist.component";
import { PodcastComponent } from "./app/components/podcast/podcast.component";
import { TrackComponent } from "./app/components/track/track.component";
import { LoginComponent } from "./app/components/user/login.component";
import { UserComponent } from "./app/components/user/user.component";

export const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  {
    path: 'dashboard/:id', children: [
      { path: 'albums', component: AlbumComponent },
      { path: 'playlists', component: PlaylistComponent },
      { path: 'podcasts', component: PodcastComponent },
      { path: 'tracks', component: TrackComponent },
      { path: 'you', component: UserComponent }]
  },

  { path: '', pathMatch: "full", redirectTo: 'home' }
]

