import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpResponse } from '@angular/common/http';
import { catchError, finalize, Observable, of, throwError } from 'rxjs';
import { SessionService } from './services/session.service';
import { Router } from '@angular/router';



@Injectable()
export class AppInterceptor implements HttpInterceptor {

  constructor(private session: SessionService, private router: Router) { }


  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {



    if (req.url.indexOf('https://api.spotify.com/') != -1) {  //endpoint
      req = req.clone({
        setHeaders: {
          'Authorization': `Bearer ${this.session.getToken()}`,

        }
      })
    }


    let unAuthenticated = false

    return next.handle(req).pipe(
      catchError((event: HttpResponse<any>) => {

        if (event.status == 401) {
          unAuthenticated = true;
          return of(event)
        }

        return throwError(() => event)
      }),

      finalize(() => {
        if (unAuthenticated) {
          this.router.navigateByUrl('/home');
          this.session.setToken(null);
        }

      })
    );
  }

}
