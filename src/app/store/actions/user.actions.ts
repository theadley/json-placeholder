import { createAction, props } from '@ngrx/store';
import {User} from '../../models/user';

export const getUsers = createAction(
  '[User] Get Users'
);

export const getUsersComplete = createAction(
  '[User] Get Users Complete',
  props<{users: User[]}>()
);

export const selectUser = createAction(
  '[User] Select User',
  props<{user: User}>()
);
