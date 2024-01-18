import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Video } from '../models/video';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VideoService {
  apiUrl: string = `https://localhost:7155/videos`;
  constructor(private http: HttpClient) { }

  getVideos(): Observable<Video[]> {
    console.log(`$hit`)
    return this.http.get<Video[]>(this.apiUrl);
  }

  getVideosByUserId(userId: number): Observable<Video> {
    return this.http.get<Video>(`${this.apiUrl}/${userId}`);
  }

  createVideo(video: Video): Observable<Video> {
    return this.http.post<Video>(this.apiUrl, video);
  }

  updateVideo(video: Video, id: number): Observable<Video> {
    return this.http.put<Video>(`${this.apiUrl}/${id}`, video);
  }

  deleteVideo(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
