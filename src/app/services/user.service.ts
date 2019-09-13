import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, from } from 'rxjs';

import { environment } from '../../environments/environment';
import { IUser } from '../data-model/user.class';
import { map, catchError, tap } from 'rxjs/operators';

@Injectable()
export class UserService {

  private modalHandler: boolean = false;

  constructor(private _http: HttpClient) { }

  private offlineUsers: IUser[] = [];

  public getUsers(): Observable<any> {
    return this._http.get('http://localhost:5000/users').pipe(
      map(res => {
        this.offlineUsers = [];
        Object.assign(this.offlineUsers, <IUser>res);
        let restoredValue = JSON.parse(sessionStorage.getItem('users'));
        if (restoredValue && (Array.isArray(this.offlineUsers) && Array.isArray(restoredValue))) {
            this.offlineUsers = this.offlineUsers.concat(restoredValue);
        }
        return this.offlineUsers;
      }),
      tap(user => {
        return user;
      }),
      catchError(err => {
        console.error(err);
        return of([]);
      })
    )
  }

  get modalVisibile(): boolean {
    return this.modalHandler;
  }

  public toggleModalHandler() {
    this.modalHandler = !this.modalHandler;
  }

  public addOfflineUsers(user: IUser): Observable<IUser> {
    this.offlineUsers.push(user);

    let restoredValue = JSON.parse(sessionStorage.getItem('users'));

    if (restoredValue && (Array.isArray(this.offlineUsers) && Array.isArray(restoredValue))) {
        this.offlineUsers = this.offlineUsers.concat(restoredValue);
        restoredValue.push(user);
    }
    else{
      restoredValue = new Array(1).fill(user);
    }

    sessionStorage.setItem('users', JSON.stringify(restoredValue));
    return from(this.offlineUsers);
  }

}
