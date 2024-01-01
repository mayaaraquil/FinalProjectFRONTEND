import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Reply } from '../models/reply';

@Injectable({
  providedIn: 'root'
})
export class ReplyService {

  apiUrl: string = `${environment.apiKey}/Reply`;

  constructor(private client: HttpClient) { }

  getReplies():Observable<Reply[]>{
    return this.client.get<Reply[]>(`${this.apiUrl}`);
  }

  getReplyById(id: number): Observable<Reply>{
    return this.client.get<Reply>(`${this.apiUrl}/${id}`);
  }

  getReplyBySearch(author: number, parentId: number):Observable<Reply[]>{
    let replySearch = {author, parentId};
    return this.client.get<Reply[]>(`${this.apiUrl}/${replySearch}`);
  }

  createReply(reply: Reply):Observable<Reply>{
    return this.client.post<Reply>(`${this.apiUrl}`, reply);
  }

  updateReply(id: number, reply: Reply):Observable<Reply>{
    return this.client.put<Reply>(`${this.apiUrl}/${id}`, reply);
  }

  deleteReply(id: number){
    return this.client.delete(`${this.apiUrl}/${id}`);
  }
}
