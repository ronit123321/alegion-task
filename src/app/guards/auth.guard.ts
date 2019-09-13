import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { IAppState } from '../store/state/app.state';
import { GetUsers } from '../store/action/user.actions';
import { selectUserList } from '../store/selectors/user.selectors';



@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
        private _store: Store<IAppState>
    ) { }

    canActivate() {
        let hasUserLoaded;
        this._store.pipe(select(selectUserList)).subscribe(u => {
            if (u && u.length) hasUserLoaded = true;
            else hasUserLoaded = false;
        })

        if(!hasUserLoaded){
        // accessed page without loading user list
        this.router.navigateByUrl('users');
        return false;
        }

        return hasUserLoaded;
    }
}