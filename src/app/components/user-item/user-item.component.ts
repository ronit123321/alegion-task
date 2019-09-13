import { Component, Input, Output, EventEmitter} from '@angular/core';
import { IUser } from 'src/app/data-model/user.class';

@Component({
  selector: 'user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css']
})
export class UserItemComponent {
  @Input() user: IUser;
  @Output() userSelected: EventEmitter<number> = new EventEmitter(undefined);

  currentDate: Date = new Date();

  constructor() {}

  navigateToUser(event) {
    event.preventDefault();
    this.userSelected.emit(this.user.id);
  }
}
