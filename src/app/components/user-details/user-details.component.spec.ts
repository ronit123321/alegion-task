import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDetailsComponent } from './user-details.component';

describe('UserDetailsComponent', () => {
  let component: UserDetailsComponent;
  let fixture: ComponentFixture<UserDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserDetailsComponent ]
    })
    .compileComponents().then(() => {
      fixture = TestBed.createComponent(UserDetailsComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
      component.user = {
        id: 1,
        first_name: "Dom",
        last_name: "Balentyne",
        email: "dbalentyne0@cloudflare.com",
        avatar: ""
      }
      fixture.detectChanges();
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.user = {
      id: 1,
      first_name: "Dom",
      last_name: "Balentyne",
      email: "dbalentyne0@cloudflare.com",
      avatar: ""
    }
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
