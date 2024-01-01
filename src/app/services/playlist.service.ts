import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Playlist } from '../models/playlist';

@Injectable({
  providedIn: 'root'
})
export class PlaylistService {

  apiUrl: string = `${environment.apiKey}/PlayList`;

  constructor(private client: HttpClient) { }

  getPlayLists():Observable<Playlist[]>{
    return this.client.get<Playlist[]>(`${this.apiUrl}`);
  }

  getPlayListsById(id: number):Observable<Playlist>{
    return this.client.get<Playlist>(`${this.apiUrl}/${id}`);
  }

  getPlayListBName(name: string):Observable<Playlist[]>{
    return this.client.get<Playlist[]>(`${this.apiUrl}/${name}`);
  }

  createPlayList(playlist: Playlist): Observable<Playlist>{
    return this.client.post<Playlist>(`${this.apiUrl}`, playlist);
  }

  updatePlayList(id: number, playlist: Playlist):Observable<Playlist>{
    return this.client.put<Playlist>(`${this.apiUrl}/${id}`, playlist);
  }

  deletePlaylist(id: number){
    return this.client.delete(`${this.apiUrl}/${id}`);
  }
}
