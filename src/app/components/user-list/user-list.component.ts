import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {User} from '../../models/user';
import {JsonPlaceholderService} from '../../services/json-placeholder.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.less']
})
export class UserListComponent implements OnInit {

  userList$: Observable<User[]>;

  userFilterText = '';

  constructor(public jsonService: JsonPlaceholderService) {
    this.userList$ = jsonService.users$;
  }

  ngOnInit() {
    // Get the users
    this.jsonService.getUsers();
  }

  selectUser(user: User) {
    // Calls the setter function
    this.jsonService.selectedUser = user;
  }

}
