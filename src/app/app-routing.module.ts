import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserListComponent} from './components/user-list/user-list.component';
import {AlbumComponent} from './components/album/album.component';
import {PostListComponent} from './components/post-list/post-list.component';


const routes: Routes = [
  { path: '', redirectTo: 'users', pathMatch: 'full' },
  { path: 'users', component: UserListComponent },
  { path: 'posts/:userId', component: PostListComponent },
  { path: 'posts', component: PostListComponent },
  { path: 'albums/:userId', component: AlbumComponent },
  { path: 'albums', component: AlbumComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
