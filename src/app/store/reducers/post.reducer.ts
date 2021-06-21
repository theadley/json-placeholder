import { Action, createReducer, on } from '@ngrx/store';
import * as PostActions from '../actions/post.actions';

export const postFeatureKey = 'post';

export interface PostState {
  isLoading: boolean;
}

export const initialState: PostState = {
  isLoading: false
};


export const reducer = createReducer(
  initialState,
);

