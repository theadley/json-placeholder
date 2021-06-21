import { createReducer, on } from '@ngrx/store';
import * as UserActions from '../actions/user.actions';
import {User} from '../../models/user';

export const userFeatureKey = 'user';

export interface UserState {
  isLoading: boolean;
  users: User[];
}

export const initialState: UserState = {
  isLoading: false,
  users: [],
};


export const reducer = createReducer(
  initialState,

  on(UserActions.getUsers, state => ({...state, isLoading: true})),
  on(UserActions.getUsersComplete, (state, {users}) => ({...state, isLoading: false, users})),
  on(UserActions.selectUser, (state, {user}) => {
    const userList = state.users.map(u => ({...u, isSelected: u.id === user?.id}));
    return {...state, isLoading: false, users: userList}
  }),

);

