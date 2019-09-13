import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { UsersListComponent } from './users.component';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('UsersComponent', () => {
  let component: UsersListComponent;
  let fixture: ComponentFixture<UsersListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        UsersListComponent,
        MockUsersComponent,
        MockUserItemComponent
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents().then(() => {
        fixture = TestBed.createComponent(UsersListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();

        component.users = [{
          id: 1,
          first_name: "Dom",
          last_name: "Balentyne",
          email: "dbalentyne0@cloudflare.com",
          avatar: ""
        },
        {
          id: 2,
          first_name: "Xerxes",
          last_name: "Turone",
          email: "xturone1@posterous.com",
          avatar: ""
        },
        {
          id: 3,
          first_name: "Kalli",
          last_name: "Carruth",
          email: "kcarruth2@columbia.edu",
          avatar: "Fe"
        },
        {
          id: 4,
          first_name: "Forester",
          last_name: "Hrishanok",
          email: "fhrishanok3@umn.edu",
          avatar: ""
        },
        {
          id: 5,
          first_name: "Hyacintha",
          last_name: "Turban",
          email: "hturban4@europa.eu",
          avatar: "Fe"
        },
        {
          id: 6,
          first_name: "Karlee",
          last_name: "Vannoni",
          email: "kvannoni5@vinaora.com",
          avatar: "Fe"
        },
        {
          id: 7,
          first_name: "Heinrick",
          last_name: "Crossfield",
          email: "hcrossfield6@imgur.com",
          avatar: ""
        },
        {
          id: 8,
          first_name: "Letizia",
          last_name: "Dearlove",
          email: "ldearlove7@topsy.com",
          avatar: "Fe"
        },
        {
          id: 9,
          first_name: "Ame",
          last_name: "Haizelden",
          email: "ahaizelden8@oaic.gov.au",
          avatar: "Fe"
        },
        {
          id: 10,
          first_name: "Ingrim",
          last_name: "Proughten",
          email: "iproughten9@51.la",
          avatar: ""
        },
        {
          id: 11,
          first_name: "Claudio",
          last_name: "O'Shavlan",
          email: "coshavlana@gov.uk",
          avatar: ""
        }];

      });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


@Component({
  selector: 'user-item',
  template: ''
})
class MockUserItemComponent {
}

@Component({
  template: ''
})
class MockUsersComponent {
}

