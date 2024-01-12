import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '@auth0/auth0-angular';
import { Song } from 'src/app/models/song';
import { SongService } from 'src/app/services/song.service';
import { SpotifyService } from 'src/app/services/spotify.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-seach-songs',
  templateUrl: './seach-songs.component.html',
  styleUrls: ['./seach-songs.component.css']
})
export class SeachSongsComponent {

  songs: any;
  searchTerm: string = '';
  tracks: any;
  userId: number = -1;
  users: any;
  constructor(private spotifyService: SpotifyService, private songService: SongService, private authService: AuthService, private userService:UserService) {}



  onSubmit(){

    this.spotifyService.SearhcSongs(this.searchTerm).subscribe(song => {
      this.songs = song;
      this.tracks = song.tracks.items;
    });

  }

  onClick(songid: string){
    this.authService.user$.subscribe(profile => {
    this.userService.getUsers().subscribe(users => {
       users.filter(user => {
        user.authName === profile?.email
        
        })
    
        this.userId = users[0].userId;
        
        
        let song: Song = {SongId: 0, SpotifySongId: songid, authId: ""};
        console.log(song);
        
        this.songService.createSong(song).subscribe();
      })
    });
   
  }
}
