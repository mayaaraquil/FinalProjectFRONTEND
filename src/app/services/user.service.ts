import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { EndUser } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl: string = `${environment.apiKey}/User`;

  constructor(private client: HttpClient) { }

  getUsers(): Observable<EndUser[]>{
    return this.client.get<EndUser[]>(`${this.apiUrl}`);
  }

  getUserbyId(id: number):Observable<EndUser>{
    return this.client.get<EndUser>(`${this.apiUrl}/${id}`);
  }

  createUser(user: EndUser){
    return this.client.post(`${this.apiUrl}`, user);
  }

  updateUser(id: number, user: EndUser):Observable<EndUser>{
    return this.client.put<EndUser>(`${this.apiUrl}/${id}`, user);
  }

  deleteUser(id: number){
    return this.client.delete(`${this.apiUrl}/${id}`);
  }
}
