import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Blog } from '../models/blog';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  apiUrl: string = `${environment.apiKey}/Blog`;

  constructor(private client: HttpClient) { }

  getAllBlogs(): Observable<Blog[]>{
    return this.client.get<Blog[]>(this.apiUrl);
  }

  getBlogsByUserId(userId:number):Observable<Blog[]>{
    return this.client.get<Blog[]>(`${this.apiUrl}/${userId}`);
  }
  //getBlogByBlogId(blogId:number):Observable<Blog>{
    //return this.
  //}
  createBlogPost(blog:Blog){
    return this.client.post(`${this.apiUrl}`, blog);
  }
  updateBlogPost(id: number, blog: Blog){
    return this.client.put<Blog>(`${this.apiUrl}/${id}`, blog);
  }
  deleteBlogPost(id:number){
    return this.client.delete(`${this.apiUrl}/${id}`);
  }
}
