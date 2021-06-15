import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../models/user';
import {ReplaySubject} from 'rxjs';
import {Post} from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class JsonPlaceholderService {

  BASE_URL = 'https://jsonplaceholder.typicode.com';

  public users$: ReplaySubject<User[]> = new ReplaySubject<User[]>();
  private selectedUserPvt: User = null;

  constructor(private http: HttpClient) { }

  getUsers() {
    // We don't have to subscribe within the service.
    // This is just one method of handling responses.
    return this.http.get<User[]>(this.BASE_URL + `/users`).subscribe( response => {
      // Response Guard
      if (!response || response === []) {
        this.users$.next([]);
      } else {
        // Here we can be certain that response is a User[]
        this.users$.next(response);
      }
    });
  }

  set selectedUser(user: User) {
    // Some cool validation logic here
    this.selectedUserPvt = this.selectedUserPvt === user ? null : user;
  }

  get selectedUser() {
    return this.selectedUserPvt;
  }

  getPosts(userId: number = null) {
    // Here we return the observable directly
    // Note that we optionally add a user if we have one to filter by
    return this.http.get<Post[]>(this.BASE_URL + (userId ? '/users/' + userId : '') + `/posts`);
  }
}
