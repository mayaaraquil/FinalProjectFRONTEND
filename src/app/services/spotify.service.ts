import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Spotifysong } from '../models/spotifysong';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  private clientId = "d8edf5156e8c459f8d3e6b77ec3b978e";
  private redirectUri = "http://localhost:4200/spotifylogin";
  private scope = "playlist-read-private";

  constructor(private router: Router, private client:HttpClient) { }

  redirectToSpotifyLogin(): void {
    if(localStorage.getItem("SpotifyToken") !== null){
      localStorage.removeItem("SpotifyToken");
    }
    const authUrl = `https://accounts.spotify.com/authorize?client_id=${this.clientId}&response_type=token&redirect_uri=${encodeURIComponent(this.redirectUri)}&scope=${encodeURIComponent(this.scope)}`;
    window.location.href = authUrl;
  }

  handleAuthCallback(): void {
    const hash = window.location.hash;
    if (hash) {
      const token = hash.substring(1).split('&').find(elem => elem.startsWith('access_token'))?.split('=')[1];
      if (token) {
        // Save the token and use it for future requests
        console.log(token);
        localStorage.setItem("Spotifytoken", token);
      }
    }
  }

  SearhcSongs(searchTerm: string): Observable<Spotifysong> {
    var spotify = "https://api.spotify.com/v1/search";
    return this.client.get<Spotifysong>(`${spotify}?q=${searchTerm}&type=track`);
  }

  GetSong(spotifyid: string):Observable<Spotifysong>{
    var spotify = "https://api.spotify.com/v1/tracks";
    return this.client.get<Spotifysong>(`${spotify}/${spotifyid}`);
  }
}
