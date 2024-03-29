import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, switchMap } from 'rxjs';
import { AuthService } from '@auth0/auth0-angular';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private auth:AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if(request.url.includes("spotify.com")){
      var token = localStorage.getItem("Spotifytoken");
      const spotifyRequest = request.clone({setHeaders: {"Authorization" : `Bearer ${token}`}});
      return next.handle(spotifyRequest);
    }

    return this.auth.getAccessTokenSilently().pipe(
      switchMap(token => {
        const authReq = request.clone({
          setHeaders: {'Authorization': `Bearer ${token}`}
        });
        return next.handle(authReq);
      })
    )
  }
}
