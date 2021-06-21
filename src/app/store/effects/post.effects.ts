import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { concatMap } from 'rxjs/operators';
import { Observable, EMPTY } from 'rxjs';

import * as PostActions from '../actions/post.actions';


@Injectable()
export class PostEffects {


  constructor(private actions$: Actions) {}

}
