import { Component } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-spotifylogin',
  templateUrl: './spotifylogin.component.html',
  styleUrls: ['./spotifylogin.component.css']
})
export class SpotifyloginComponent {

  constructor(private spotifyService:SpotifyService) {}


 
  ngOnInit(){
    this.spotifyService.handleAuthCallback();
  }


}
