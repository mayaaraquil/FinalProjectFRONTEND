import { Component } from '@angular/core';
import { SpotifyService } from './services/spotify.service';
import { Spotifysong } from './models/spotifysong';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'final-project-frontend';

  tokenExists :boolean = false;

  constructor(private spotifyService: SpotifyService) {}

  loginWithSpotify() : void{
    this.spotifyService.redirectToSpotifyLogin();
  }

  checkForToken(){
    if(localStorage.getItem("SpotifyToken") ){
      this.tokenExists = true;
    }else{
      this.tokenExists = false;
    }
  }

  ngOnInit(){
    this.checkForToken();
  }
 
}
