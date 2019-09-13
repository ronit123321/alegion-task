import { Injectable } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { Store, select } from '@ngrx/store';
import { of } from 'rxjs';
import { switchMap, map, withLatestFrom } from 'rxjs/operators';

import { IAppState } from '../state/app.state';
import { GetUser, EUserActions, GetUserSuccess, GetUsers, GetUsersSuccess, AddUser } from '../action/user.actions';
import { selectUserList } from '../selectors/user.selectors';
import { UserService } from 'src/app/services/user.service';


@Injectable()
export class UserEffects {
  @Effect()
  getUser$ = this._actions$.pipe(
    ofType<GetUser>(EUserActions.GetUser),
    map(action => action.payload),
    withLatestFrom(this._store.pipe(select(selectUserList))),
    switchMap(([id, users]) => {
      const selectedUser = users.filter(user => user.id === +id)[0];
      return of(new GetUserSuccess(selectedUser));
    })
  );

  @Effect()
  getUsers$ = this._actions$.pipe(
    ofType<GetUsers>(EUserActions.GetUsers),
    switchMap(() => this._userService.getUsers()),
    switchMap((rawUser: any) => of(new GetUsersSuccess(rawUser)))
  );


  @Effect()
  addUser$ = this._actions$.pipe(
    ofType<AddUser>(EUserActions.AddUser),
    switchMap((action) => this._userService.addOfflineUsers(action.payload)),
    switchMap(() => this._userService.getUsers()),
    switchMap((rawUser: any) => of(new GetUsersSuccess(rawUser)))
  );



  constructor(
    private _userService: UserService,
    private _actions$: Actions,
    private _store: Store<IAppState>
  ) {}
}