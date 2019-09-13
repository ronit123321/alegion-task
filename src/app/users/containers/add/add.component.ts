import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromRoot from '@state/index';
import { AddUser } from '@state/user/user.actions';
import { User } from '@state/user/user.model';
import { Router } from '@angular/router';

@Component({
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent {
  constructor(
    private store: Store<fromRoot.State>,
    private router: Router
    ) {}

  onUserChange(user: User) {
    this.store.dispatch(new AddUser({ user: user }));
    this.router.navigate(['/']);
  }
}
