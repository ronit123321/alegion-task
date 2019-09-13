import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserComponent } from './user.component';
import { UserDetailsComponent } from 'src/app/components/user-details/user-details.component';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { Observable, from } from 'rxjs';

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;
  const initialState = {
    users: {},
    selectedUser: {
      id: 1,
      first_name: "Dom",
      last_name: "Balentyne",
      email: "dbalentyne0@cloudflare.com",
      avatar: ""
    }
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserComponent, UserDetailsComponent],
      imports: [
        RouterTestingModule
      ],
      providers: [
        provideMockStore({ initialState })
      ]
    }).compileComponents()
  }));

  beforeEach(() => {

    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.user$ = Observable.create({
      id: 1,
      first_name: "Dom",
      last_name: "Balentyne",
      email: "dbalentyne0@cloudflare.com",
      avatar: ""
    });
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });

});
