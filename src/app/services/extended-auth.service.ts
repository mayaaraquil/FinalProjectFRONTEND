// auth.service.ts
import { Injectable } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ExtendedAuthService {
  constructor(private auth: AuthService, private http: HttpClient) {}

  loginWithRedirect(): void {
    this.auth.loginWithRedirect();
  }

  logout(): void {
    this.auth.logout({ returnTo: window.location.origin });
  }

  getAccessToken(): Observable<string | null> {
    return this.auth.idToken$;
  }

  getUserProfile(): Observable<any> {
    return this.auth.idToken$.pipe(
      switchMap((idToken) => {
        // Assuming you have an API endpoint to fetch user profile based on the Auth0 token
        return this.http.get<any>(`${yourApiBaseUrl}/user-profile`, {
          headers: { Authorization: `Bearer ${idToken}` },
        });
      })
    );
  }

  // Add more methods as needed for managing user data
}