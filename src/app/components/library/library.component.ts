import { Component } from '@angular/core';
import { SongService } from 'src/app/services/song.service';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent {

  templibrary:any;
  library:any[] = [];

  constructor(private songService: SongService, private spotifyService: SpotifyService) {}

  ngOnInit(){
    this.songService.getSongs().subscribe(songs => {
      this.templibrary = songs;
      for(let i = 0; i < this.templibrary.length; i ++){
        this.spotifyService.GetSong(this.templibrary[i].spotifySongId).subscribe(song => {
          this.library.push(song);
        })
      }
    });
  }

  onClick(id: string){
    this.songService.deleteSong(id).subscribe();
  }
}
