import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './components/user-list/user-list.component';
import {HttpClientModule} from '@angular/common/http';
import { AlbumComponent } from './components/album/album.component';
import {FormsModule} from '@angular/forms';
import { PostListComponent } from './components/post-list/post-list.component';
import { UserComponent } from './components/user/user.component';
import { FilterUsersPipe } from './pipes/filter-users.pipe';
import { FilterPostsPipe } from './pipes/filter-posts.pipe';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    AlbumComponent,
    PostListComponent,
    UserComponent,
    FilterUsersPipe,
    FilterPostsPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
