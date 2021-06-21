import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../models/user';
import {Observable} from 'rxjs';
import {Post} from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class JsonPlaceholderService {

  BASE_URL = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.BASE_URL + `/users`);
  }

  getPosts(userId: number = null): Observable<Post[]> {
    return this.http.get<Post[]>(this.BASE_URL + (userId ? '/users/' + userId : '') + `/posts`);
  }
}
