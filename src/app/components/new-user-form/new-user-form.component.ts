import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { IUser } from 'src/app/data-model/user.class';
import { UserService } from 'src/app/services/user.service';
import { FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'new-user-form',
  templateUrl: './new-user-form.component.html',
  styleUrls: ['./new-user-form.component.css']
})
export class NewUserFormComponent implements OnInit {

  userForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
  });

  @Output() addNew: EventEmitter<IUser> = new EventEmitter(undefined);

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
  }

  onSubmit(event) {
    event.preventDefault();
    let payload: IUser = {
      id: new Date().getTime(),
      email: '',
      first_name: this.userForm.value.firstName,
      last_name: this.userForm.value.lastName,
      avatar: ''
    };

    this.addNew.emit(payload);    

  }

  onCancel(event) {
    event.preventDefault();
    this.userService.toggleModalHandler();
  }

}
