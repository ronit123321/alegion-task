import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserItemComponent } from './user-item.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('UserItemComponent', () => {
  let component: UserItemComponent;
  let fixture: ComponentFixture<UserItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [],
      declarations: [ 
        UserItemComponent
       ],
      providers: [],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents().then(() => {
      fixture = TestBed.createComponent(UserItemComponent);
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

    // fixture = TestBed.createComponent(UserItemComponent);
    // component = fixture.debugElement.children[0].componentInstance;
    // fixture.detectChanges();

  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
