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
import {ActionReducer, StoreModule} from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromUser from './store/reducers/user.reducer';
import { UserEffects } from './store/effects/user.effects';
import * as fromPost from './store/reducers/post.reducer';
import { PostEffects } from './store/effects/post.effects';

// console.log all actions
export function debug(reducer: ActionReducer<any>): ActionReducer<any> {
  return (state, action) => {
    console.log('action', action);
    console.log('state after reducer', reducer(state, action));

    return reducer(state, action);
  };
}

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
    FormsModule,
    StoreModule.forRoot({}, {metaReducers: [debug]}),
    EffectsModule.forRoot([]),
    StoreModule.forFeature(fromUser.userFeatureKey, fromUser.reducer),
    EffectsModule.forFeature([UserEffects, PostEffects]),
    StoreModule.forFeature(fromPost.postFeatureKey, fromPost.reducer)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
