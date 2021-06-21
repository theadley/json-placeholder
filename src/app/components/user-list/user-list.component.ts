import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {User} from '../../models/user';
import {select, Store} from '@ngrx/store';
import {UserState} from '../../store/reducers/user.reducer';
import {getUsers, selectUser} from '../../store/actions/user.actions';
import {selectIsLoading, selectSelectedUser, selectUsers} from '../../store/selectors/user.selectors';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.less']
})
export class UserListComponent implements OnInit {

  userList$: Observable<User[]>;
  selectedUser$: Observable<User>;
  isLoading$: Observable<boolean>;

  userFilterText = '';

  isTheSelectedUserLarge = true;

  constructor(private userStore: Store<UserState>) {}

  ngOnInit() {
    this.userStore.dispatch(getUsers());
    this.userList$ = this.userStore.pipe(select(selectUsers));
    this.selectedUser$ = this.userStore.pipe(select(selectSelectedUser));
    this.isLoading$ = this.userStore.pipe(select(selectIsLoading));
  }

  selectUser(user: User) {
    // Calls the setter function
    this.userStore.dispatch(selectUser({user}));
  }

}
