import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { User, generateUsers } from '@state/user/user.model';
import { UserListComponent } from './user-list.component';

describe('UserListComponent', () => {
  let component: UserListComponent;
  let fixture: ComponentFixture<UserListComponent>;
  const users = generateUsers();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserListComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserListComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display a list of users', () => {
    component.users = users;
    fixture.detectChanges();
    const ulDebugEl = fixture.debugElement.query(By.css('.card-box'));
    const ulEl = ulDebugEl.nativeElement as HTMLUListElement;

    const childElementCount = fixture.debugElement.query(By.css('ul')).nativeElement;

    console.log(childElementCount);

    expect(childElementCount).toBe(users.length);
    const firstLi = ulEl.querySelector('li:first-child').querySelector('a');

    expect(firstLi.textContent).toEqual(
      `${users[0].first_name} ${users[0].last_name}`
    );
  });

  it('should select a user when clicked', () => {
    const user = users[0];

    component.users = users;
    fixture.detectChanges();
    const anchorDebugEl = fixture.debugElement.query(
      By.css('ul > li:first-child > a')
    );

    let selectedUser: User;
    component.selectUser.subscribe(u => (selectedUser = u));

    anchorDebugEl.triggerEventHandler('click', user);
    expect(selectedUser).toEqual(user);
  });
});
