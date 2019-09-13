import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersComponent } from './users.component';

import { provideMockStore } from '@ngrx/store/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Component } from '@angular/core';

describe('UsersComponent', () => {
  let component: UsersComponent;
  let fixture: ComponentFixture<UsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        UsersComponent, 
        MockUsersListComponent,
        MockUserItemComponent
      ],
      imports: [
        RouterTestingModule
      ],
      providers: [
        provideMockStore({
          initialState: {
            users: {}
          }
        })
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create users redirect component', () => {
    expect(component).toBeTruthy();
  });
});



@Component({
  selector: 'app-users',
  template: ''
})
class MockUsersListComponent {
}

@Component({
  selector: 'user-item',
  template: ''
})
class MockUserItemComponent {
}