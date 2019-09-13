import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service';
import { Store } from '@ngrx/store';
import { IAppState } from './store/state/app.state';
import { AddUser } from './store/action/user.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(
    private userService: UserService,
    private _store: Store<IAppState>
  ) {}

  ngOnInit() {

  }
  
  openNewUserForm(event) {
    event.preventDefault();
    this.userService.toggleModalHandler();
  }

  handleSubmit(payload){
    this._store.dispatch(new AddUser(payload));
    this.userService.toggleModalHandler();
  }

}
