import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PostTypes } from '../models/post-types';
import { Comments } from '../models/comments';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  apiUrl: string = `${environment.apiKey}/Comment`

  constructor(private client:HttpClient) { }

  getAllComments():Observable<Comment[]>{
    return this.client.get<Comment[]>(this.apiUrl);
  }

  getCommentById(id: number):Observable<Comment>{
    return this.client.get<Comment>(`${this.apiUrl}/${id}`);
  }

  getCommentBySearch(author?: number, postType?: PostTypes, postId?: number): Observable<Comments[]>{
    var searchterms = {author: author, postType: postType, postId: postId } 
    return this.client.get<Comments[]>(`${this.apiUrl}/${searchterms}`);
  }

  createComment(comment: Comments): Observable<Comments>{
    return this.client.post<Comments>(`${this.apiUrl}`, comment);
  }

  updateComment(comment: Comments, id: number): Observable<Comments>{
    return this.client.put<Comments>(`${this.apiUrl}/${id}`, comment);
  }

  deleteComment(id:number){
    return this.client.delete(`${this.apiUrl}/${id}`);
  }
}
