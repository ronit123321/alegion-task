import { Component, OnInit, Input } from '@angular/core';
import { IUser } from 'src/app/data-model/user.class';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  @Input()
  user: IUser;

  constructor() {}

  ngOnInit() {}
}
