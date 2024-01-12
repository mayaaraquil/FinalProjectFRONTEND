import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Song } from '../models/song';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SongService {

  apiUrl = `${environment.apiKey}/Song`
  constructor(private client: HttpClient) { }

  getSongs():Observable<Song[]>{
    return this.client.get<Song[]>(this.apiUrl);
  }

  getSongById(id: string): Observable<Song>{
    return this.client.get<Song>(`${this.apiUrl}/${id}`);
  }

  createSong(song: Song):Observable<Song>{
    console.log(this.apiUrl);
    return this.client.post<Song>(`${this.apiUrl}`, song);
  }

  deleteSong(id: string){
    return this.client.delete(`${this.apiUrl}/${id}`);
  }
}
