import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import {catchError, concatMap, map, mergeMap} from 'rxjs/operators';
import {Observable, EMPTY, of} from 'rxjs';

import * as UserActions from '../actions/user.actions';
import {JsonPlaceholderService} from '../../services/json-placeholder.service';


@Injectable()
export class UserEffects {

  // '[User] Get Users'
  getUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.getUsers),
      mergeMap(action =>
        this.userService.getUsers().pipe(
          map(response => {
            return UserActions.getUsersComplete({users: response});
          }),
          catchError(err => {
            return of(UserActions.getUsersComplete({users: []}));
          })
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private userService: JsonPlaceholderService
  ) {}

}
