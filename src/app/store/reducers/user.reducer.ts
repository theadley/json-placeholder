import { createReducer, on } from '@ngrx/store';
import * as UserActions from '../actions/user.actions';
import {User} from '../../models/user';

export const userFeatureKey = 'user';

export interface UserState {
  isLoading: boolean;
  users: User[];
  selectedUser: User;
}

export const initialState: UserState = {
  isLoading: false,
  users: [],
  selectedUser: null
};


export const reducer = createReducer(
  initialState,

  on(UserActions.getUsers, state => ({...state, isLoading: true})),
  on(UserActions.getUsersComplete, (state, {users}) => ({...state, isLoading: false, users})),
  on(UserActions.selectUser, (state, {user}) => (
    {
      ...state,
      selectedUser: state.selectedUser && state.selectedUser.id === user.id ? null : user
    }
  )),

);

