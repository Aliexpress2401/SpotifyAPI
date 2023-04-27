import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './components/app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/user/login.component';
import { NavComponent } from './components/nav/nav.component';
import { DashboardThumbnailComponent } from './components/dashboard/dashboard-thumbnail.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from '../routes';
import { DashboardService } from './components/dashboard/dashboard.service';
import { DashboardDetailsComponent } from './components/dashboard/dashboard-detail.component';
import { HomeComponent } from './components/home/home.component';
import { FormsModule } from '@angular/forms';
import { RepositoryService } from './services/repository.service';
import { InfoComponent } from './components/info/info.component';
import { AlbumComponent } from './components/album/album.component';
import { PlaylistComponent } from './components/playlist/playlist.component';
import { PodcastComponent } from './components/podcast/podcast.component';
import { AppInterceptor } from './app.interceptor';
import { TrackComponent } from './components/track/track.component';
import { of, tap } from 'rxjs';
import { SessionService } from './services/session.service';
import { UserComponent } from './components/user/user.component';
import { CallInterceptor } from './call.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    NavComponent,
    DashboardThumbnailComponent,
    DashboardDetailsComponent,
    HomeComponent,
    InfoComponent,
    AlbumComponent,
    PlaylistComponent,
    PodcastComponent,
    TrackComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [
    RepositoryService,
    SessionService,
    DashboardService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AppInterceptor,
      multi: true
    },
    {
      provide: APP_INITIALIZER,
      useFactory: (repository: RepositoryService, session: SessionService) =>
        () => {
          if (window.location.href.indexOf('login') !=-1) {
            return of()
          }
          return repository.getUserInfo()
            .pipe(tap(userInfo => session.setUserInfo(userInfo)))
            .toPromise();
        },
      deps: [RepositoryService, SessionService],
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CallInterceptor,
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
