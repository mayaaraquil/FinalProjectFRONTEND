import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl: string = `${environment.apiKey}/User`;

  constructor(private client: HttpClient) { }

  getUsers(): Observable<User[]>{
    return this.client.get<User[]>(`${this.apiUrl}`);
  }

  getUserbyId(id: number):Observable<User>{
    return this.client.get<User>(`${this.apiUrl}/${id}`);
  }

  createUser(user: User):Observable<User>{
    return this.client.post<User>(`${this.apiUrl}`, user);
  }

  updateUser(id: number, user: User):Observable<User>{
    return this.client.put<User>(`${this.apiUrl}/${id}`, user);
  }

  deleteUser(id: number){
    return this.client.delete(`${this.apiUrl}/${id}`);
  }
}
