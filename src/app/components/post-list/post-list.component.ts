import { Component, OnInit } from '@angular/core';
import {JsonPlaceholderService} from '../../services/json-placeholder.service';
import {Observable} from 'rxjs';
import {Post} from '../../models/post';
import {ActivatedRoute} from '@angular/router';
import {select, Store} from '@ngrx/store';
import {UserState} from '../../store/reducers/user.reducer';
import {User} from '../../models/user';
import {selectSelectedUser} from '../../store/selectors/user.selectors';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.less']
})
export class PostListComponent implements OnInit {

  postList$: Observable<Post[]>;

  postFilterText = '';
  selectedPostId: number;
  selectedUserId: number;
  selectedUser$: Observable<User>;

  constructor(
    public jsonService: JsonPlaceholderService,
    private route: ActivatedRoute,
    private userStore: Store<UserState>
  ) { }

  ngOnInit() {
    const paramUserId = this.route.snapshot.paramMap.get('userId');
    this.selectedUserId = paramUserId ? Number(paramUserId) : null;
    this.postList$ = this.jsonService.getPosts(this.selectedUserId);
    this.selectedUser$ = this.userStore.pipe(select(selectSelectedUser));
  }

  selectPost(id: number) {
    // If it's already selected, clear, else select it
    this.selectedPostId = id === this.selectedPostId ? null : id;
  }

}
